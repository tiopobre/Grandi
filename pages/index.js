import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';

const HomePage = () => {
    return (
    <Layaout>
        <div>Welcome to Next.js!</div>
        <div className="contenido">
                <div className="texto">
                    <h1 className="ti">"Cultiva tu futuro"</h1>
                    <p>Grandi</p>
                </div>
                <div className="iconos">
                    <input type="image" src="static/imgs/ico1.png" alt="icono1" />
                    <input type="image" src="static/imgs/ico2.png" alt="icono2" />
                    <input type="image" src="static/imgs/ico3.png" alt="icono3" />
                </div>
            </div>
            <Footer/>
    </Layaout>
    
    )
  }
  
  export default HomePage