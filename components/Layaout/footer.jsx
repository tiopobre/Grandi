import React from 'react';
import Buscador from '../UI/buscador'
import Navegacion from './navegacion'
import Link from 'next/link'
const Footer = () => {
    return (

        <footer>
        <div className="footer">
          <div className = "row">
          <div className ="col-md-3 footersito"></div>
         <div className ="col-md-3 footersito">
          <p>Integración Multimedia</p>
          <p>David Santiago Rodríguez</p>
          <p>Germán Rodríguez Gutierrez</p>
          <p>Juan Daniel Castañeda</p>
          </div>
          <div className ="col-md-3 footersito"> 
          <p>Daniel Serrano</p>
          <p>Santiago Peñuela</p>
          <p>Universidad Militar Nueva Granada</p>
          <p>© 2020 Copyright</p>
          </div>
          <div className ="col-md-3 footersito"></div>
          </div>
        </div>
      </footer>


    );
}

export default Footer;