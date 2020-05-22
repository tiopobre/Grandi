import React from 'react';
import Link from 'next/link';
const cardPlanta = ({planta}) => {
  const {id, nombre, cardImg} = planta;
    return ( 
        <>
          <div className="col-md-4 animate-box">
            <div className="feature-left">
              <img className="plant_img" src={cardImg} alt="" />
              <div className="feature-copy">
                <p>Puedes cultivar estas plantas y obtener sus frutos, raíces y hojas para utilizarlas.</p>
                <Link href="/plantas/[id]" as={`/plantas/${id}`} >
                  <p><a href = '#'>Aprende más
                    <i className="icon-arrow-right22" />
                  </a></p>
                </Link>
                <h3>{nombre}</h3>
              </div>
            </div>
          </div>
        </>
     );
}
 
export default cardPlanta;
<>
</>