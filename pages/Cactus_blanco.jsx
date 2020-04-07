import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'


const Cactus_blanco = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Cactus Blanco</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">Los cactus conforman la familia de plantas suculentas denominada Cactaceae. Estas especies, como buenas crasas que son, se caracterizan por acumular agua y nutrientes en sus tejidos, así, pueden adaptarse sin problema al hábitat en el que se encuentren.</p>
	        	<p className="text-left pdos">Las flores son solitarias y en su mayoría hermafroditas. Los periantos están formados por numerosos tépalos colocados en espiral. Los frutos suelen ser indehiscentes, en forma de baya y rara vez secos.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/cactusb.jpg"/>
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
                <p className="text-center info2">Los cactus son perfectos para decoración interior del hogar, sobre todo aquellas variedades que por su origen no sobrevivirían a la intemperie. Y no solo eso, además, pueden plantarse para formar parte de la ornamentación exterior.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Cactus_blanco