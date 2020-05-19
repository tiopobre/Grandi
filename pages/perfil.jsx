import React, {useContext} from 'react';
import Layaout from '../components/Layaout/layaout'
import dynamic from "next/dynamic";
import Router ,{useRouter} from 'next/router'
const LoginPage = dynamic(() => import("./login"));
import Link from 'next/link'
import {FirebaseContext} from '../firebase' // context

const Perfil = () => {
  // Context de firebase
  const {usuario,firebase} = useContext(FirebaseContext);
  // enrutador
  const router = useRouter();
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
                    <div className="col-md-12">
                      {/* Interior lista */} 
                      <div className="row">
                        <div className="col-md-4">

                         <div className="icono">  <Link href="/Desc_Planta"><img src="static/imgs/sauco.png" alt=""/></Link></div>
                        </div>
                        <div className="col-md-8">
                          <h4 className="text-left"><strong>SAUCO</strong></h4>
                          <br />

                          <p className="text-left">El sauco es una plancta medicinal y es considerada como un botiquín con el que se preparan diversos remedios naturales.</p>
                        </div>
                      </div>
                    </div>
                    <div className="separador"><p>.</p></div>
                    <div className="col-md-12">
                      {/* Interior lista */} 
                      <div className="row">
                        <div className="col-md-4">
                          <div className="icono">  <img src="static/imgs/zanahoria.png" alt="" /></div>
                        </div>
                        <div className="col-md-8">
                          <h4 className="text-left"><strong>ZANAHORIA</strong></h4><br />
                          <p className="text-left">Las zanahorias se pueden consumir de muy diversas formas. Se suelen trocear, y se consumen crudas, cocidas, fritas o al vapor.</p>
                        </div>
                      </div>
                    </div>
                    {/* Interior lista */} 
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