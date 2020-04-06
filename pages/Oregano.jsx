import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

////OREGANO///

const Oregano = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Orégano</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">El orégano es mucho más que un condimento para la pizza. Se utiliza en remedios naturales desde hace miles de años y es esencial en la cocina mediterránea.  </p>
	        	<p className="text-left pdos">El orégano contiene vitaminas A, C E y K, así como fibra, folato, hierro, magnesio, vitamina B6, calcio y potasio. Además, el orégano, que algunas veces es llamado “mejorana” contiene potentes fitoquímicos que ofrecen potenciales beneficios de salud.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/oregano.jpg"/>
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
                <p className="text-center info2">El Orégano es un buen Antioxidante debido a la gran cantidad de ácidos fenólicos y flavonoides que tiene. También se cree que tiene una gran cantidad de poder para eliminar los virus que pueden venir a través del contagio de los alimentos. El principio activo que tiene el orégano es el flavonol retusin, y sus aceites se destacan por tener monoterpenoides y monoterpenos.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Oregano