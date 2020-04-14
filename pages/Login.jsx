import React, { useState } from 'react';
import Layaout from '../components/Layaout/layaout'
import Router from 'next/router'
import firebase from '../firebase';
//validaciones
import useValidacion from '../hooks/useValidacion'
import validarLogin from '../validacion/validarLogin'
// State Inicial
const STATE_INICIAL = {
    email: '',
    password: ''
}

const Login = () => {
    const {valores, errores, handleChange, handleSubmit,} =  useValidacion(STATE_INICIAL, validarLogin, iniciasSesion)
    const {email, password} = valores;
    async function iniciasSesion (){
        try {
            await firebase.login(email,password);
            Router.push('/');
        } catch (error) {
            console.error('Hubo un error al autenticar', error.message);
            //guardarError
        }
    }
    return (
        <Layaout>
      <div className="container">
        <div className="card card-container login">
          <img id="profile-img" className="profile-img-card" src="static/imgs/LOGO_GRANDI.png" />
          <p id="profile-name" className="profile-name-card" />
          
          <form 
          className="form-signin"
          onSubmit = {handleSubmit}
          >
            <span 
            id="reauth-email" 
            className="reauth-email" />
            
            <input 
                name = "email"
                type="email" 
                id="inputEmail" 
                className="form-control" 
                placeholder="e-mail" 
                required autoFocus

                value ={email}
                onChange ={handleChange}
            />
            {errores.email && <p>{errores.email}</p>}
            <input 
                name = "password"
                type="password" 
                id="inputPassword" 
                className="form-control" 
                placeholder="Contraseña" 
                required autoFocus

                value ={password}
                onChange ={handleChange}
            />
           {errores.email && <p>{errores.password}</p>}
            <button 
                className="btn btn-lg btn-primary btn-block btn-signin" 
                type="submit" 
                value= "login"
            >Ingresar</button>
          </form>
        </div>
      </div>
      </Layaout>
    )
}

export default Login