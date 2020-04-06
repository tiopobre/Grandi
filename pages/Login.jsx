import React from 'react';
import Layaout from '../components/Layaout/layaout'
import Footer from '../components/Layaout/footer';
import Link from 'next/link'

const Login = () => {
    return (
        <Layaout>
      <div className="container">
        <div className="card card-container login">
          <img id="profile-img" className="profile-img-card" src="static/imgs/LOGO_GRANDI.png" />
          <p id="profile-name" className="profile-name-card" />
          <form className="form-signin">
            <span id="reauth-email" className="reauth-email" />
            <input type="email" id="inputEmail" className="form-control" placeholder="Usuario" required autofocus />
            <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Ingresar</button>
          </form>
        </div>
      </div>
      </Layaout>
    )
}

export default Login