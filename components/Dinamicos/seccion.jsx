import React, {useState, useContext, useEffect} from 'react';
import Buscador from '../UI/buscador'
import CardPlanta from '../Dinamicos/cardPlanta'
//firebase
import {FirebaseContext} from '../../firebase' // context

const Seccion = ({seccion, seccionDB, imgSeccion}) => {
  const [plantas, setPlantas] = useState([]);
  const {firebase} = useContext(FirebaseContext);
  useEffect(() => {
    const obtenerPlantas = () =>{
        firebase.db.collection('plantas').where("Medicinal", '==', true).onSnapshot(manejarSnapShot);
    }
     obtenerPlantas();
  }, []);
  // funcion que manipula el snapshot
  function manejarSnapShot (snapshot){
    const plantas = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    // enviar el resultado de la conultaal state
    setPlantas(plantas);
    console.log(plantas)
  }

    return (
        <div>  
          <div className="banner-div">
            <img src={imgSeccion} alt="" className="banner" />
            <div className="bannerText">
              <h1>Plantas {seccion}</h1>
            </div>
          </div>
          <div id="fh5co-features">
            <div className="container">
              <Buscador/>
              <div className="row">

                {plantas.map(element =>(
                  <CardPlanta
                    //states
                    key = {element.id}
                    planta = {element}
                 />
               ))}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Seccion