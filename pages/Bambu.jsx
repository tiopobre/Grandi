import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Bambu = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Bambú</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">Es una planta de larga duración que tiene su origen en China, perteneciente a la familia de las gramíneas y puede llegar a medir aproximadamente unos 25 metros, siempre y cuando se encuentre en las mejores condiciones.</p>
	        	<p className="text-left pdos">El bambú también puede ser una planta pequeña que puede medir incluso menos de un metro de altura y los tallos pueden tener hasta medio centímetro de diámetro. De igual manera los podemos encontrar gigantes con una medida de 25 metros de altura y unos 30 cm de diámetro aproximadamente, sin embargo son algo inusuales, siendo lo más común es que lleguen a medir entre uno y diez metros de alto.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/bambu.jpg"/>
                    </div>
                </div>
            </div>
     </div>
     <div className="containerr">
        <div className="row">
            <div className="col-sm-8">
                    <div className="row contenido-tercero">
                            <h4 className="col-sm htres"><img src="static/imgs/agua2.svg" /></h4>
                            <h4 className="col-sm hcuatro"><img src="static/imgs/sun2.svg" /></h4>
                            <h4 className="col-sm hcinco"><img src="static/imgs/crecimiento (4).svg" /></h4>
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
                <p className="text-center info2">El bambú aparte de ser flexible es bastante duro, la caña de esta planta tiene una gran cantidad de usos, que pueden sustituir o hasta incluso mejorar los clásicos de la madera. Toda esta fuerza y flexibilidad proviene de sus raíces, ya que dichas raíces son tan fuertes que pueden pasar a través de los ladrillos y también por el material de la mampostería, sin embargo en la actualidad existe un material que puede ser más veloz, sencillo de colocar y es de bajo coste.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Bambu