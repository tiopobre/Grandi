import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Cebolla = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Cebolla</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">Se trata de una hortaliza de origen asiático cultivada desde 6.000 a.C. Desde Asia se extendió por Europa, de donde pasó a América. Actualmente existe una amplia gama de variedades, que pueden clasificarse en función del color del bulbo, forma, tamaño, usos, origen y precocidad.</p>
	        	<p className="text-left pdos">Tiene muchos usos culinarios, pudiendo usarse de distintas maneras, ya sea cruda o cocinada. Además se le conocen distintas propiedades medicinales.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/cebolla1.jpg"/>
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
                <p className="text-center info2">Se ha demostrado que las cebollas, especialmente aquellas con un tejido de color, son fuentes importantes de flavonoides, compuestos cuya actividad antioxidante guarda relación con los efectos beneficiosos contra las enfermedades cardiovasculares y posiblemente el cáncer. Estos flavonoides, presentes en forma de glucósidos, son extraordinariamente estables durante el almacenamiento y la cocción.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Cebolla