import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

////COLA DE CABALLO///

const Cola_de_caballo = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Cola de caballo</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">La cola de caballo es una planta restauradora con numerosas propiedades para nuestro bienestar. Conocida desde siempre por su poder como diurética también es útil para los riñones, el adelgazamiento y cómo depurativo y desintoxicante. </p>
	        	<p className="text-left pdos">Esta planta originaria de América y que crece en zonas arcillosas y al borde de cursos de agua hoy se ha propagado por todo el globo.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/cola-caballo.jpg"/>
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
                <p className="text-center info2">La cola de caballo mejora la salud ósea, contiene altas medidas de sílice, un mineral básico para huesos sólidos. En una investigación italiana, se observó que las señoras que padecen osteoporosis poseían ampliado el espesor óseo después de un tiempo de suplementación utilizando la cola de caballo.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Cola_de_caballo