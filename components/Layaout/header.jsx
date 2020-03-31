import React from 'react';
import Buscador from '../UI/buscador'
import Navegacion from './navegacion'
import Link from 'next/link'
const Header = () => {
    return (

        <header id="header">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link href="/" ><a className="navbar-brand">
                    <img src="static/imgs/LOGO_GRANDI.png" alt="" />
                </a></Link>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link href="/"><a className="nav-link" >INICIO <span className="sr-only">(current)</span></a></Link>
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
                        <li className="nav-item">
                            <Link href="/Perfil" ><a className="nav-link">PERFIL</a></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>


                </div>
            </nav>

            



        </header>



    );
}

export default Header;

