import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

////ALOE VERA///

const Desc_Planta = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Aloe Vera</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">Es una de las más de 250 especies de Aloe conocidas en el mundo. Habita principalmente en zonas desérticas o semidesérticas, donde se da el clima más adecuado para su crecimiento.</p>
	        	<p className="text-left pdos">Las hojas del Aloe vera merecen especial atención, puesto que de ellas se extrae el jugo usado históricamente para curar todo tipo de dolencias. Carnosas, con un tamaño de 50 cm de largo y un considerable grosor, son capaces de acumular gran cantidad de agua.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/aloe_0.jpg"/>
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
                <p className="text-center info2">El Aloe vera actúa como desintoxicante, digestivo, depurativo, regenerador celular, bactericida, antiséptico, antiinflamatorio, analgésico, antiviral, inhibidor del dolor, anti-coagulante, estimulador del sistema inmune. A nivel tópico: cicatrizante y hidratante.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Desc_Planta