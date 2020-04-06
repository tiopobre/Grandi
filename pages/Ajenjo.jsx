import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

////AJENJO///

const Ajenjo = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Ajenjo</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">El ajenjo, es una planta herbácea nativa de Latinoamérica, que también se da en las regiones templadas de Europa y África, tiene grandes beneficios, propiedades y usos medicinales que se ha usado por las civilizaciones más antiguas del planeta, se le considera una planta medicinal muy efectiva.  </p>
	        	<p className="text-left pdos">Esta planta posee un sabor amargo, producto de la absintina, uno de sus componentes. Sus propiedades medicinales tratan las afecciones gástricas y su uso medicinal es apto para cualquier persona, siguiendo siempre el consejo y las directrices de su médico.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/ajenjo.jpg"/>
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
                <p className="text-center info2">Es perfecto para el tratamiento de afecciones como la indigestión, gases y la eliminación de parásitos intestinales. También se ha usado el ajenjo como un ayudante en problemas del hígado y vesícula. Aumenta la secreción de jugos biliares descongestionando el hígado y mejorando sus funciones.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Ajenjo