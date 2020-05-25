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
   <div className="container">
              <div className="row justify-content-md-center">
                   <div className="col-md-auto usuario">
                       <div className="icono"> 
                           <img src="static/imgs/usuario.png" alt=""/>
                       </div>
                   </div>
             </div>
             <div className="row justify-content-md-center">
               <h4 className="col-md-auto planta"><strong>{usuario.displayName}</strong></h4>
             </div>
             <div className="row justify-content-md-center agrega">
             <Link className="col-md-auto" href="/nuevo-cultivo" >
                    <button 
                      type="button" 
                      value= "nuevo-cultivo"
                      className="btn btn-primary "
                    >Agregar Cultivo</button>
               </Link>
             </div>
          
           <br /><hr className="linea-separada" /><br />
         
            <div class="row justify-content-md-center">
                 <h1 className="col-md-auto planta"><b>Tus Cultivos</b></h1>
            </div>
            <div id="interior" className="row">
                    {cultivos.map(element =>(
                      <CardCultivo //states
                        key = {element.id}
                        cultivo = {element}
                      />
                    ))}
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