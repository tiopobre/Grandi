import React from 'react';
import Link from 'next/link'
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';

const infoPlanta = () => {
    return (
    <Layaout>
        <div className="contenido">
                <div className="texto">
                    <h1 className="ti">CULTIVA TU FUTURO</h1>
                    <p><strong>Grandi</strong></p>
                </div>
                <div className="iconos">
                <Link href = "/alimentos"><input type="image" src="static/imgs/ico1.png" alt="icono1" /></Link>
                <Link href = "/medicinales"  ><input type="image" src="static/imgs/ico2.png" alt="icono2" /></Link>
                <Link href = "/decorativas"><input type="image" src="static/imgs/ico3.png" alt="icono3" /></Link>               
                </div>
            </div>
    </Layaout>
    
    )
  }
  
  export default infoPlanta