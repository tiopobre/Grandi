import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Hoja_rota = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Hoja Rota</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">Tiene tallo grueso, alcanza 20 m de largo; hojas grandes, correosas, brillantes, cordadas, de 20 a 90 cm de largo × 20 a 80 cm de ancho. En plantas nuevas son pequeñas, enteras, sin lóbulos ni agujeros. Fruto de 30 cm de largo × 3-5 cm de diámetro, que asemeja una mazorca de maíz verde con escamas hexagonales.</p>
	        	<p className="text-left pdos">En sus primeras fructificaciones, contiene tanto ácido oxálico que es tóxico, causando inmediato dolor y ampollamiento, irritación, picazón, pérdida de la voz. Tras un año de maduración, es seguro ingerirla.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/hoja-rota.jpg"/>
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
                <p className="text-center info2">El fruto puede madurarse, cortándolo cuando las primeras escamas comienzan a salirse y a exudar un olor acre, envolviéndolo en una bolsa de papel. Las pepitas después se hacen solas, y muestran su pulpa comestible, que se corta del resto del fruto y se consume. Tiene el mismo sabor de la piña.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Hoja_rota