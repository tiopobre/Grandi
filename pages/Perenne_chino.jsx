import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'


const Perenne_chino = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Perenne chino</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">Es una planta que vive durante más de dos años. Las plantas perennes se denominan también vivaces. No todas las plantas son vivaces, sino que una buena parte de las hierbas, las plantas que no desarrollan tallos leñosos (de madera), son anuales o bienales (viven solo uno o dos años).</p>
	        	<p className="text-left pdos">El adjetivo perenne se usa también para referirse al follaje de una planta vivaz si este no se renueva cada año de una vez, sino que se conserva verde en todas las estaciones.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/perenne.jpg"/>
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
                <p className="text-center info2">Las plantas perennes herbáceas son aquellas que no forman tejido leñoso permanente. En climas cálidos pueden crecer continuamente. En climas estacionales, su patrón de desarrollo se adapta a la estación de crecimiento. En regiones de clima más fresco crecen y florecen generalmente durante la estación cálida del año y el follaje muere cada invierno.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Perenne_chino