import React from 'react';
import Link from 'next/link'

const Navegacion = () => {
    return ( 
        <nav className = "d-flex flex-row bd-highlight mb-3 justify-content-center">
            <Link href = "/index" ><a className="p-2 bd-highlight">Index </a></Link>
            <Link href = "/Medicinales" ><a className="p-2 bd-highlight">Medicinales</a></Link>
            <Link href = "/Alimentos" ><a className="p-2 bd-highlight">Alimentos</a></Link>
            <Link href = "/Decorativas" ><a className="p-2 bd-highlight">Decorativas</a></Link>
        </nav>
     );
}

 
export default Navegacion;