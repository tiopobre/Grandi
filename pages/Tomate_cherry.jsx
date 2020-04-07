import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Tomate_cherry = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Tomate Cherry</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">Se trata de una planta anual, de hojas sencillas, pecioladas con limbo hundido. Exhibe pelos glandulares en las partes verdes que expulsan un líquido de aroma particular. Las flores surgen en manojos de diferentes cantidades.</p>
	        	<p className="text-left pdos">El fruto es el tomate cherry, muy pequeño, que crece y madura rápido. Mide entre 1 a 3 cm, pesa sobre los 13 gramos, y es de sabor dulzón, con un toque ácido.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/tomate1.jpg"/>
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
                <p className="text-center info2">El tomate cherry se siembra en cualquier época del año en todas las zonas tropicales. Habitualmente se escogen los meses entre diciembre a marzo, por ser un periodo donde las condiciones del ambiente están aptas favoreciendo el correcto desarrollo de la planta. Se cultiva fácilmente sin mayores atenciones.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Tomate_cherry