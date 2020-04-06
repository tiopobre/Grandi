import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

////MANZANILLA///

const Manzanilla = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Manzanilla</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">La manzanilla es una planta herbácea que puede alcanzar los 60 cm de altura. Se distribuía originalmente en la zona de los Balcanes, el norte de África y Asia occidental, pero actualmente se cultiva en muchos países del mundo como España y Argentina.</p>
	        	<p className="text-left pdos">Se trata de una de las hierbas medicinales más antiguas de las que hay conocimiento, y se cree que el interés por ella surgió debido a su intenso aroma. Eso llevó al descubrimiento de las diferentes propiedades que la hicieron tan famosa.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/manzanilla.jpg"/>
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
                <p className="text-center info2">La infusión de manzanilla permite una gran ayuda a nuestro cuerpo a nivel digestivo en momentos de clara necesidad. En situaciones en las que sentimos que no hemos digerido bien una comida y tenemos malestar, 
                dejarnos ayudar por las propiedades de la manzanilla siempre es una buena idea.Su capacidad para relajar a nuestro cuerpo ayuda al aparato digestivo, fomentando los movimientos que el estómago y del intestino necesitan realizar de forma coordinada para promover una buena digestión. 
                Así pues, alivia los dolores abdominales y la indigestión.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Manzanilla