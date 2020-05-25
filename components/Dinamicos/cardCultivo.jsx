import React from 'react';
import Link from 'next/link';
const cardCultivo = ({cultivo}) => {
  const {alias,planta ,urlImg, votos, comentarios, creador} = cultivo;
  console.log("Comentarios",comentarios)
    return ( 
        <>
        <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="icono">  <img src= "static/imgs/sauco.png" alt="" /></div>
              </div>
              <div className="col-md-8">
                <h4 className="text-left"><strong>{alias}</strong></h4><br />
                <h5 className="text-left"><strong>{planta}</strong></h5><br />
                <p className="text-left">Las zanahorias se pueden consumir de muy diversas formas. Se suelen trocear, y se consumen crudas, cocidas, fritas o al vapor.</p>
              </div>
            </div>
                <div>
                    <p>Votos {votos}</p>
                </div>
                <div>
                    <p>comentarios {comentarios.length}</p>
                </div>
          </div>
          <div className="separador"><p>.</p></div>
        </>
     );
}
 
export default cardCultivo;
<>
</>