import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Desc_Planta = () => {
    return (
        <Layaout>
            <div id="contenedor">{/* Contenedor principal */}
        <div className="introduction">
          <div className="row col-md-11">
            <div className="col-md-6">
              <div className="row contenidoo">
                <h4 className="col-2"><strong>Eucalipto</strong></h4><br />
                <h4 className="col-2"><strong /></h4>
                <h4 className="col-2"><img src="static/imgs/passion.svg" /></h4>
                <h4 className="col-6"><img src="static/imgs/planta.svg" /></h4>
              </div>
              <p className="text-left">Originario de Australia, este árbol de grandes dimensiones, crece rápidamente en todas las regiones templadas del planeta. Además, sus raíces absorben mucha agua del terreno.</p>
              <p className="text-left">Para usos medicinales se utilizan las hojas frescas para hacer aceite esencial de eucalipto y para inhalaciones, y las secas para infusiones.</p>
            </div>
            <div className="col-md-6 eucalipto">
              <div className="icono"> <img src="static/imgs/eucalipto_1.jpg"/></div>
            </div>
            <p>
            </p><ul className="social-iconos col-md-6">
              <li><a href="#"><i className="regadera"><img src="static/imgs/agua.svg" /></i></a></li>
              <li><a href="#"><i className="tiempo"><img src="static/imgs/crecimiento (1).svg" /></i></a></li>
            </ul>
            <p />
          </div>
        </div>
        <br /><hr className="linea-separa" /><br />
        <div className="introductiondos">
          <div className="row col-md-10">
            <div className="info col-md-11">
              <h4 className="text-center"><strong>Más información</strong></h4><br />
              <p className="text-center">Se usa como desinfectante y antiséptico para tratar varios procesos virales, afecciones respiratorias (tos, bronquitis, neumonía, asma…) e infecciones de la piel.
                El uso más frecuente son las inhalaciones. Para ello, se colocan varias hojas troceadas en un recipiente de agua hirviendo. Se pone encima la cabeza y se cubre totalmente con una toalla para inhalar el vapor.</p>
            </div>
          </div>
        </div>
      </div>
      
        </Layaout>

    )
}

export default Desc_Planta