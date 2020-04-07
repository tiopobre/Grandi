import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const P_cinta = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Planta Cinta</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">De nombre científico Chorophytum comosum, esta planta perenne pertenece a la familia de las liliáceas. Su origen se encuentra en las selvas tropicales de África del sur y actualmente existen más de doscientas especies diferentes. Lo mejor de esta planta es, sin duda, que renueva ambientes afectados por monóxido de carbono y formaldehido presente en barnices, aerosoles y cosméticos.</p>
	        	<p className="text-left pdos">Su hojas, que nacen de una roseta basal, son alargadas, péndulas, afiladas y de color verde con una banda blanca. Sus flores blancas son pequeñas y de ellas se forman nuevas rosetas que son como plantas en miniatura perfectamente formadas y que, al trasplantarlas adecuadamente, se transforman en plantas adultas.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/cinta.jpg"/>
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
                <p className="text-center info2">La planta en interior puede adaptarse a diversas condiciones de temperatura, soportando incluso una zona de baja luz o una estancia fría. En el exterior prefiere luz indirecta o semisombra, ya que el contacto directo con el sol hace que las hojas se vuelven amarillas, se sequen y se quemen, algo que puede hacer que la planta muera. Es importante que para que la cinta sobreviva bien no baje de los 7º C de temperatura.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default P_cinta