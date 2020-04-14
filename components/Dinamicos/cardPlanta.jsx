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
                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                <Link href="/plantas/[id]" as={`/plantas/${id}`} >
                  <p><a href = '#'>Aprende mas
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