import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';

const HomePage = () => {
    return (
    <Layaout>
        <div className="contenido">
                <div className="texto">
                    <h1 className="ti">CULTIVA TU FUTURO</h1>
                    <p><strong>Grandi</strong></p>
                </div>
                <div className="iconos">
                    <input type="image" src="static/imgs/ico1.png" alt="icono1" />
                    <input type="image" src="static/imgs/ico2.png" alt="icono2" />
                    <input type="image" src="static/imgs/ico3.png" alt="icono3" />
                </div>
            </div>
    </Layaout>
    
    )
  }
  
  export default HomePage