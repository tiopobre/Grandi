import React from 'react';
import Link from 'next/link';
const cardCultivo = ({cultivo}) => {
  const {alias,planta ,urlImg, votos, comentarios, creador} = cultivo;
  console.log("Comentarios",comentarios)
    return ( 
        <>
          <div className="container cultivo">
           <div className="row align-items-center">
                    <div>
                      <div className="col contenidoo-segundo">
                          <div className="icono"> 
                             <img src="static/imgs/cultivar.png" alt=""/>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row">
                         <h4 className="col text-left"><b>{alias}</b>       <b>({planta})</b></h4>
                      </div>   
                       <p className="text-left puno">Descripción de tú cultivo</p>  
                       <p className="text-left puno">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dignissimos consequuntur cumque eaque incidunt? Ipsa cum repellat, quisquam ratione possimus voluptates. Aspernatur natus ducimus voluptatum ullam reprehenderit iste vitae minima!</p>   
                      <div className="row cultibut">
                        <div className="col ">
                          <p>Votos {votos}</p>
                        </div>
                        <div className="col ">
                          <p>Comentarios {comentarios.length}</p>
                        </div>
                        <div class="col"></div>
                        <div class="col"></div>
                      </div>
                  </div>
                                   
             </div>
           </div>
        </>
     );
}
 
export default cardCultivo;
<>
</>