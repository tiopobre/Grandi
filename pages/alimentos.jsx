import React from 'react';
import Layaout from '../components/Layaout/layaout';
import Seccion from '../components/Dinamicos/seccion'

const Alimentos = () => {
    const img = "static/imgs/albahaca.jpg";
    const nombreSeccion = 'de Alimentos';
    const querySeccion = 'Alimento' ;
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

export default Alimentos