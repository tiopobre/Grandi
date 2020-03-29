import React from 'react';
import Buscador from '../UI/buscador'
import Navegacion from './navegacion'
import Link from 'next/link'
const Header = () => {
    return ( 

        <header id = "header">
            <div className="d-flex flex-row bd-highlight mb-3">
                <div>
                    <p>P</p>
                    <Buscador/>
                   <Navegacion/>
                </div>
                <div >
                    <p className="border border-primary">Hola Daniel</p>
                    <button type = "button">Cerrar Sesion</button>
                    <Link href = "/"><a>Login</a></Link>
                    <Link href = "/"><a>Crear Cuenta</a></Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;

