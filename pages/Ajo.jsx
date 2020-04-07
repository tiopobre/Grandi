import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Ajo = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Ajo</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">El ajo o Allium sativum es una planta bulbosa, vivaz y rústica que pertenece a la familia de las Liliaceae, subfam. Allioideae.</p>
	        	<p className="text-left pdos">Su raíz se compone de 6-12 bulbillos, conocidos tradicionalmente como dientes de ajo, unidos por la base formando un cuerpo con forma redondeada llamada 'cabeza de ajos'. Cada uno de los 'dientes', así como el bulbo, queda recubierto por una membrana semitransparente.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/ajo1.jpg"/>
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
                <p className="text-center info2">Los ajos poseen una riqueza en proteínas e hidratos de carbono superior a otras hortalizas y verduras por lo que las superan en aporte energético. Los componentes que destacan por sus aportes son los minerales (potasio, fósforo, yodo, zinc y magnesio), vitamínicos (vitaminas B1, B3, B6, C y E), de naturaleza azufrada o sulfurosa y la aliina (responsable principal de su aroma y descubierta en los años 40 del siglo XX por el doctor y premio Nóbel suizo Arthur Stoll).</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Ajo