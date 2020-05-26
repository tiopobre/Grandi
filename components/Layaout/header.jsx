import React, {useContext , Fragment} from 'react';
import Router from 'next/router';
import Buscador from '../UI/buscador'
import Navegacion from './navegacion'
import Link from 'next/link'
import {FirebaseContext} from '../../firebase' // context
const Header = () => {
const {usuario,firebase} = useContext(FirebaseContext);
    return (
        <>
            <header id="header">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link href="/" ><a className="navbar-brand">
                        <img src="static/imgs/LOGO_GRANDI.png" alt="" />
                    </a></Link>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div 
                        className="collapse navbar-collapse" 
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a  className="nav-link" >INICIO 
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Alimentos" ><a className="nav-link">ALIMENTOS</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Medicinales" ><a className="nav-link">MEDICINALES</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Decorativas" ><a className="nav-link">DECORATIVAS</a></Link>
                            </li>
                            {usuario &&                            
                                (
                                    <>
                                        <li className="nav-item">
                                            <Link href="/perfil" ><a className="nav-link">PERFIL</a></Link>
                                        </li>
                                    </>
                                )                        
                            }
                        
                        {usuario 
                            ? 
                                (
                                    <>
                                        <li className="nav-item">
                                        <p className="nav-link" >HOLA{usuario.displayName}</p>
                                        </li>
                                        
                                        <li>
                                            <button  className="Cerrar nav-link"
                                                onClick = {() => firebase.cerrarSesion().then(function(){
                                                    return Router.push('/');
                                                })}
                                            >Cerrar sesión</button>
                                        </li>
                                        
                                    </>
                                )
                            :
                                (   
                                    <>
                                        <li className="nav-item">
                                            <Link href="/login" >
                                                <button className="inicia nav-link">Login</button>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/crear-cuenta" >
                                                <button className="crea nav-link" >Crear Cuenta</button>
                                            </Link>
                                        </li>
                                    </>
                                    
                                )                              
                        }
                      </ul>
                    </div>       
                </nav>
            </header>
        </>
    );
}

export default Header;

