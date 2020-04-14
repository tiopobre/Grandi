import React, { useState, useEffect } from 'react';

const useValidacion = (stateInicial, validar, fn) => {
    
    const [valores, setValores] = useState(stateInicial)
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);
    // Funcion que escucha 
    useEffect(() =>{
        if(submitForm){
            const noErrores = Object.keys(errores).length ===0;
            if(noErrores){
                fn(); //Funcion que se ejecuta en el componente dependiendo del formulario
                
            }
            setSubmitForm (false);
        }
    }, [errores]);
    // Funcion que se ejecuta cuando el usuraio escribe
    const handleChange= e =>{
        //console.log('state', valores)
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }
    // Funcion que se ejecutara con el submit
    const handleSubmit = e => {
        console.log('submit');
        e.preventDefault();
        const erroresValidacion = validar(valores)
        setErrores(erroresValidacion);
        setSubmitForm(true);
    }

    return {
        valores,
        errores,
        handleChange,
        handleSubmit,
    };
}
 
export default useValidacion;