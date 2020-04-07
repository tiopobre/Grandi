import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Fresa = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Fresa</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">La planta fresa es perenne, herbácea, presenta una altura variable entre 10 y 20 cm, anchura de 0,3 a 1 m. Sistema radicular fasciculado, constituido por raíces que poseen cambium vascular y suberoso, raicillas que no lo tienen y son de vida corta y experimentan un proceso de renovación.</p>
	        	<p className="text-left pdos">Sus tallos rastreros, nudosos y con estolones, se desarrollan partiendo de una corona central, que es un eje corto o tallo firme, cónico, compuesto por numerosas hojas unidas, en el que se pueden observar muchas escamas foliares.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/fresa.jpg"/>
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
                <p className="text-center info2">Resulta fácil cultivar fresas en macetas debido al poco espacio que ocupa y a que florece en corto tiempo después de plantada. Fragaria x ananassa tolera diversos tipos de clima, pudiendo soportar temperaturas de hasta –10 ºC, aunque las flores pueden sufrir daños con temperaturas inferiores a 0 ºC. Asimismo, puede sobrevivir a temperaturas estivales de 55 ºC.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Fresa