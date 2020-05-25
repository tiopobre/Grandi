import React, {useContext, useEffect, useState} from 'react';
import Layaout from '../components/Layaout/layaout'
import CardCultivo from '../components/Dinamicos/cardCultivo'

import dynamic from "next/dynamic";
import Router ,{useRouter} from 'next/router'
const LoginPage = dynamic(() => import("./login"));
import Link from 'next/link'
import {FirebaseContext} from '../firebase' // context
import cardPlanta from '../components/Dinamicos/cardPlanta';

const Perfil = () => {
  // Context de firebase
  const {usuario,firebase} = useContext(FirebaseContext);
  // enrutador
  const router = useRouter();
  //State
  const [cultivos, setCultivos] = useState([]);
  // query de cultivos
  useEffect(() => {
    if(usuario){
      console.log("entra para query", usuario.uid);
      const obtenerCultivos = () =>{
        firebase.db.collection('cultivos').where('creador.id', '==', usuario.uid).onSnapshot(manejarSnapShot)
      }
      obtenerCultivos();
    }
    
  }, [usuario]);
  // snapshot
  function manejarSnapShot (snapshot){
    const cultivos = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    // enviar el resultado de la conultaal state
    setCultivos(cultivos);
    console.log("CULTIVOS : ", cultivos);
  }
  if (usuario){
    return (
      <>
        <Layaout>
          {usuario && 
            (
              <div id="contenedor">{/* Contenedor principal */}
            <div className="introduction">
              <div className="row">
                <div className="col-md-4">
                  <div className="icono">  <img src="static/imgs/foto_perfil.png" alt="" /></div>
                  <br />
                  <h4 className="text-center"><strong>{usuario.displayName}</strong></h4>
                  <p className="text-center">¡Amante de las plantas y entusiasta!</p>
                  <Link href="/Nuevo-cultivo" >
                    <button 
                      type="button" 
                      value= "nuevo-cultivo"
                      className="btn btn-primary "
                    >Agrergar Cultivo</button>
                  </Link>
                </div>
                <div className="col-md-8">
                  <h4><strong>TUS CULTIVOS</strong></h4>
                  <br />
                  <div id="interior" className="row">
                    {cultivos.map(element =>(
                      <CardCultivo
                        //states
                        key = {element.id}
                        cultivo = {element}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
            )
            
          }
        </Layaout>
      </>  
    );
  }
  else{
    //return router.push('/login');  // enrutador 
    return  <LoginPage/>;
  }

    
}

export default Perfil