import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Peperomia = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Peperomia Watermelon</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">Es originaria de las zonas tropicales del continente americano: especialmente Brasil, Bolivia, Venezuela y Ecuador. Es una planta de porte bajo (máximo 25-30 centímetros).</p>
	        	<p className="text-left pdos">La Peperomia watermelon recibe ese apodo por el dibujo tan original de sus hojas, que recuerda a una sandía. De colores verde y plata, su follaje es denso pero delicado (las hojas se caen con facilidad si tiras de ellas). Los tallos son granates y aunque normalmente están ocultos, esto le da una gracia (aún más) especial.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/peperomia.jpg"/>
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
                <p className="text-center info2">Son muy fáciles de cultivar y pueden ser una buena elección de planta para el principiante. Seguir las instrucciones básicas de cuidado permitirá que estas plantas prosperen. Lo más importante es suficiente luz, sin exceso de agua y condiciones de frío.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Peperomia