import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Zanahoria = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Zanahoria</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">La zanahoria es una planta herbácea hojas recortadas, flores blancas y raíz puntiaguda, jugosa y comestible, perteneciente a la familia umbelíferas (Umbelliferae), y su nombre botánico es Daucus carota var. sativa. Es la hortaliza más importante y de mayor y consumo de la familia.</p>
	        	<p className="text-left pdos">La zanahoria es una planta de clima frío, pero cultivada también en regiones tropicales y subtropicales, especialmente en grandes altitudes. Su cultivo data desde tiempos antiguos, es una especie originaria del centro asiático, y de allí se extendió a Europa, la región del Mediterráneo.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/zanahoria1.jpg"/>
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
                <p className="text-center info2">La zanahoria es rica en beta carotenos (fuente de vitamina A), que le dan el color naranja característico a su raíz. Igualmente es rica en vitamina E y en algunas vitaminas del complejo B, especialmente la B3 o niacina, y el ácido fólico. El agua es el componente más abundante en este vegetal, seguido por los carbohidratos. En cuanto a los minerales, es importante su aporte de potasio, calcio, fósforo y yodo.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Zanahoria