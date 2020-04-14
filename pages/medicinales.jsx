import React from 'react';
import Layaout from '../components/Layaout/layaout';
import Seccion from '../components/Dinamicos/seccion'

const Medicinales = () => {
    const img = "static/imgs/hiperico.jpg";
    const nombreSeccion = 'Medicinales';
    const querySeccion = 'Medicinal' ;
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

export default Medicinales