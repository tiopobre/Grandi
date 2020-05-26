import React, { useState } from 'react';
import Layaout from '../components/Layaout/layaout'

import firebase from '../firebase';
//validaciones
import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'
// State Inicial
const STATE_INICIAL_CULTIVO = {
    nombre: '',
    email: '',
    password: '',
}

//
const crearCuenta = () => {
    //
    const {valores, errores, handleChange, handleSubmit} =  useValidacion(STATE_INICIAL_CULTIVO, validarCrearCuenta, crearCuenta);
    const {nombre, email, password} = valores;
    
    // funcion que crea una cuenta con firebase 
    async function crearCuenta(){
        console.log('creaando cuenta...')
        try{    
            await firebase.registrar(nombre, email, password);
            return Router.push('/');
        }catch(error){
            console.error('Hubo un error al crear el usuario', error.message);
        }
    }
    return ( 
        <>
            <Layaout>
               <div className="container">
                   <div className="card card-container login">
                   <h2  className="d-flex justify-content-center">Crear Cuenta</h2>
                <div className="d-flex flex-row bd-highligh justify-content-center">
                    <form 
                        onSubmit = {handleSubmit}
                    >
                        <div className="form-group">
                            <label >Nombre de Usuario</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name = "nombre"
                                placeholder="Usuario"
                                value ={nombre}
                                onChange ={handleChange}
                            />
                            {errores.nombre && <p>{errores.nombre}</p>}
                        </div>
                        <div className="form-group">
                            <label >Correo electrónico</label>
                            <input 
                                type="e-mail" 
                                className="form-control" 
                                name = "email"
                                placeholder="e-mail"
                                value ={email}
                                onChange ={handleChange}
                            />
                            {errores.email && <p>{errores.email}</p>}
                            <small 
                            id="emailHelp" 
                            className="form-text text-muted"
                            >Nunca compartiremos tu correo electrónico con nadie más.</small>
                        </div>
                        <div className="form-group">
                            <label >Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name = "password"
                                placeholder="Contraseña"
                                value ={password}
                                onChange ={handleChange}
                            />
                             {errores.password && <p>{errores.password}</p>}  
                        </div>

                        <button 
                            className="btn btn-lg btn-primary btn-block btn-signin" 
                            type="submit" 
                            value= "crear cuenta"
                        >Crear</button>
                    </form>
                </div>
                   </div>
               </div>
            </Layaout> 
        </>
     );
}
 
export default crearCuenta
