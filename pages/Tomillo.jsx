import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

////TOMILLO///

const Tomillo = () => {
    return (
     <Layaout>
  <div className="container">
     <div className="row align-items-center">
            <div className="col">
                <div className="row align-items-center contenido-primero">
                    <h1 className="col eucalipto"><b>Tomillo</b></h1>
                    <h4 className="col-md-auto huno"><img src="static/imgs/passion.svg" /></h4>
                    <h4 className="col col-lg-2 hdos"><img src="static/imgs/planta2.svg" /></h4>
                </div>
                <p className="text-left puno">El tomillo es una hierba mediterránea con usos dietéticos, medicinales y ornamentales. Las flores, las hojas y el aceite de tomillo se han utilizado para tratar una variedad de síntomas y dolencias desde hace miles de años. </p>
	        	<p className="text-left pdos">El tomillo se toma por vía oral para la bronquitis, la tos ferina, el dolor de garganta, el cólico, la artritis, el malestar estomacal, el dolor de estómago (gastritis), la diarrea, la enuresis nocturna, un trastorno del movimiento en los niños (dispraxia), los gases intestinales (flatulencia), las infecciones por parásitos y los trastornos cutáneos. </p>
            </div>
            <div>
                <div className="col contenido-segundo">
                    <div className="icono"> 
                        <img src="static/imgs/tomillo.jpg"/>
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
                <p className="text-center info2">El tomillo tiene una serie de poderosos efectos medicinales. El timol es uno de los principales  biocidas de origen natural conocidos. 
                los biocidas son sustancias que pueden destruir organismos dañinos, como las bacterias infecciosas.Utilizado junto con otros biocidas, como el carvacrol, el tomillo tiene fuertes propiedades antimicrobianas.</p>
            </div>
     </div>
  </div>
      </Layaout>

    )
}

export default Tomillo