import React, {useState, useEffect, useContext} from 'react';
import Layaout from '../../components/Layaout/layaout'
import {FirebaseContext} from '../../firebase' // context
import {useRouter} from 'next/router'

////Planta desde la base de datos///
const state_ini ={
       nombre : '',
        urlImg : '',
        descripcion :'',
        masInfo : '',
        tags : [],
        info_cultivar : []
    }
const Planta = () => {
    //Routing para obtener el id actual
    const router = useRouter();
    console.log('router', router);
    const {query: { id }} = router;
    console.log( 'id : ',id);
    // state
    const [planta, setPlanta] = useState(state_ini);
    // context de firebase
    const {firebase} = useContext(FirebaseContext);
    // usse effect donde buscara en firebase
    useEffect(() => {
        
        const obtenerPlantas = () =>{
            firebase.db.collection("plantas").doc(id).get().then(doc => {
                // si doc existe
                if (doc.exists) { 
                    setPlanta(doc.data());
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }
         obtenerPlantas();
         console.log("Planta" , planta);
    }, []); 

    return (
     <Layaout>
        <div className="container">
           <div className="row align-items-center">
                  <div className="col">
                      <div className="row align-items-center contenido-primero">
                          <h1 className="col eucalipto"><b>{planta.nombre}</b></h1>
                      </div>
                      <p className="text-left puno">{planta.descripcion}</p>
        
                  </div>
                  <div>
                      <div className="col contenido-segundo">
                          <div className="icono"> 
                              <img src={planta.urlImg}/>
                          </div>
                      </div>
                  </div>
           </div>
           <div className="containerr">
              <div className="row">
                  <div className="col-sm-8">
                          <div className="row contenido-tercero">
                                  <a className="col-sm htres"   href="#semilla"><h4><img src="../static/imgs/agua2.svg" /></h4></a>
                                  <a className="col-sm hcuatro" href="#regadera"> <h4 ><img src="../static/imgs/sun2.svg" /></h4></a>
                                  <a className="col-sm hcinco"  href="#sol"><h4 ><img src="../static/imgs/crecimiento (4).svg" /></h4></a>
                          </div>
                  </div>
                  <div className="col-sm-4">
                      <h4></h4>
                  </div>
               </div>
           </div>
              <br /><hr className="linea-separa" /><br />
           <div className="container">
                  <div className="col align-self-center">
                      <h4 className="text-center hseis"><strong>Más información</strong></h4><br />
                      <p className="text-center info2">{planta.masInfo}</p>
                  </div>
                  <h4 className="text-center hseis"><strong>Tags</strong></h4><br />
                  <div className="row cultibuto align-self-center">
                  <div class="col"></div>
                    {planta.tags.map(tag =>(
                         <p className="col text-center info2"
                            key={tag}
                         >{tag}</p>
                    ))}
                  <div class="col"></div>
                      
                  </div>
           </div>
           <br /><hr className="linea-separa" /><br />
           <div className="row align-items-center">
                  <div className="col">
                      <div className="row align-items-center contenido-primero">
                          <h4 id="semilla" className="col-md-auto hunoo">{planta.info_cultivar[0]}</h4>
                      </div>        
                  </div>
                  <div>
                      <div className="col contenido-segundor">
                          <div className="icono"> 
                             <img src="../static/imgs/soja.png" alt=""/>
                          </div>
                      </div>
                  </div>
           </div>
  
              <br /><hr className="linea-separada" /><br />
           
              <div className="row align-items-center">
                  <div>
                      <div className="col contenido-segundor">
                          <div className="icono"> 
                          <img src="../static/imgs/regadera.png" alt=""/>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row align-items-center contenido-primero">
                          <h1 className="col planta"><b></b></h1>
                          <h4 id="regadera" className="col-md-auto hunoo">{planta.info_cultivar[1]} </h4>
                      </div>        
                  </div>
             </div>
           <br /><hr className="linea-separada" /><br />
           <div className="row align-items-center">
                  <div className="col">
                      <div className="row align-items-center contenido-primero">
                          <h1 className="col planta"><b></b></h1>
                          <h4 id="sol" className="col-md-auto hunoo">{planta.info_cultivar[2]}</h4>
                      </div>        
                  </div>
                  <div>
                      <div className="col contenido-segundor">
                          <div className="icono"> 
                          <img src="../static/imgs/dom.png" alt=""/>
                          </div>
                      </div>
                  </div>
           </div>
        </div>
      </Layaout>

    )
}

export default Planta