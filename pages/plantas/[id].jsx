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
        tags : []
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
    }, []); 

    return (
     <Layaout>
        <div className="container">
        <h1>Desde {id}</h1>
           <div className="row align-items-center">
                  <div className="col">
                      <div className="row align-items-center contenido-primero">
                          <h1 className="col eucalipto"><b>{planta.nombre}</b></h1>
                          <h4 className="col-md-auto huno"><img src="../static/imgs/passion.svg" /></h4>
                          <h4 className="col col-lg-2 hdos"><img src="../static/imgs/planta2.svg" /></h4>
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
                                  <h4 className="col-sm htres"><img src="../static/imgs/agua2.svg" /></h4>
                                  <h4 className="col-sm hcuatro"><img src="../static/imgs/sun2.svg" /></h4>
                                  <h4 className="col-sm hcinco"><img src="../static/imgs/crecimiento (4).svg" /></h4>
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
                  <div className="col align-self-center">
                    <h4 className="text-center hseis"><strong>Tags</strong></h4><br />
                    {planta.tags.map(tag =>(
                         <p className="text-center info2"
                            key={tag}
                         >{tag}</p>
                    ))}
                      
                  </div>
           </div>
        </div>
      </Layaout>

    )
}

export default Planta