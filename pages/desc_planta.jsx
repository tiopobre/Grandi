import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Desc_Planta = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col"><b>Eucalipto</b></h1>
                    <h4 className="col-md-auto"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2"><img src="static/imgs/planta.svg" /></h4>
                </div>
                <p className="text-left">Originario de Australia, este árbol de grandes dimensiones, crece rápidamente en todas las regiones templadas del planeta. Además, sus raíces absorben mucha agua del terreno.</p>
	        	<p className="text-left">Para usos medicinales se utilizan las hojas frescas para hacer aceite esencial de eucalipto y para inhalaciones, y las secas para infusiones.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/eucalipto_1.jpg"/>
                    </div>
                </div>
            </div>
     </div>
     <div className="containerr">
        <div className="row">
            <div class="col-sm-8">
                    <div className="row contenido-tercero">
                            <h4 className="col-sm"><img src="static/imgs/agua.svg" /></h4>
                            <h4 className="col-sm"><img src="static/imgs/sun.svg" /></h4>
                            <h4 className="col-sm"><img src="static/imgs/crecimiento (1).svg" /></h4>
                    </div>
            </div>
            <div class="col-sm-4">
                <h4></h4>
            </div>
         </div>
     </div>
        <br /><hr className="linea-separa" /><br />
     <div className="container">
            <div className="col align-self-center">
                <h4 className="text-center"><strong>Más información</strong></h4><br />
                <p className="text-center">Se usa como desinfectante y antiséptico para tratar varios procesos virales, afecciones respiratorias (tos, bronquitis, neumonía, asma…) e infecciones de la piel.
                El uso más frecuente son las inhalaciones. Para ello, se colocan varias hojas troceadas en un recipiente de agua hirviendo. Se pone encima la cabeza y se cubre totalmente con una toalla para inhalar el vapor.</p>
            </div>
     </div>
  </div>
      
    <Footer/>
      </Layaout>

    )
}

export default Desc_Planta