import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Lechuga = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Lechuga</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">La lechuga es un tipo de hortaliza herbácea conformada por flores amarillentas, fruto seco, con una sola semilla y con hojas grandes, radicales, blandas, de distintas formas, que la gente come en ensaladas o en guisadas.</p>
	        	<p className="text-left pdos">Como temperatura máxima la lechuga puede soportar hasta 30° C y como baja -6° C y la humedad relativa conveniente oscila entre el 60 y 80 %. Para su cultivo es preferible el suelo arenoso, limoso, ligero y con buen drenaje, en ninguna de sus variantes admite la sequía.</p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/lechuga1.jpg"/>
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
                <p className="text-center info2">El valor nutritivo que reporta, poseyendo un alto contenido de agua, entre 90 y 95 %; es rica en antioxidantes, tales como la vitamina A, C, E, B1, K, B3, fósforo, calcio, hierro, potasio y aminoácidos.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Lechuga