import React, { useState } from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';

import firebase from '../firebase';
//validaciones
import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'
// State Inicial
const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: '',
}

//
const crearCuenta = () => {
    //
    const {valores, errores, handleChange, handleSubmit,} =  useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta)
    const {nombre, email, password} = valores;
    
    // funcion que crea una cuenta con firebase 
    async function crearCuenta(){
        console.log('creaando cuenta...')
        try{    
            await firebase.registrar(nombre, email, password);
        }catch(error){
            console.error('Hubo un error al crear el usuario', error.message);
        }
    }
    return ( 
        <>
            <Layaout>
                <h2>Crear Cuenta</h2>
                <div className="d-flex flex-row bd-highligh justify-content-center">
                <form 
                    onSubmit = {handleSubmit}
                    
                >
                    <div className="form-group">
                        <label >Nombre Usurio</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name = "nombre"
                            placeholder="Tù usuario"
                            value ={nombre}
                            onChange ={handleChange}
                        />
                        {errores.nombre && <p>{errores.nombre}</p>}
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input 
                            type="e-mail" 
                            className="form-control" 
                            name = "email"
                            placeholder="Enter email"
                            value ={email}
                            onChange ={handleChange}
                        />
                        {errores.email && <p>{errores.email}</p>}
                        <small 
                        id="emailHelp" 
                        className="form-text text-muted"
                        >We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name = "password"
                            placeholder="Clave"
                            value ={password}
                            onChange ={handleChange}
                        />
                         {errores.password && <p>{errores.password}</p>}  
                    </div>

                    <button 
                        type="submit" 
                        value= "crear cuenta"
                        className="btn btn-primary "
                        >Crear</button>
                </form>
            </div>
           
            </Layaout>
            
        </>
     );
}
 
export default crearCuenta
