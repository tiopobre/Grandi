import React from 'react';
import Layaout from '../components/Layaout/layaout';
import Seccion from '../components/Dinamicos/seccion'

const Decorativas = () => {
    const img = "static/imgs/viola_tricolor.jpg";
    const nombreSeccion = 'Decorativas';
    const querySeccion = 'Decorativa' ;
    return (
        <Layaout>
            <Seccion
              seccion = {nombreSeccion}
              seccionDB = {querySeccion}
              imgSeccion = {img}
            />
        </Layaout>
    )
}

export default Decorativas