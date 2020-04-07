import React from 'react';
import Layaout from '../components/Layaout/layaout';
import Footer from '../components/Layaout/footer';
import Link from 'next/link';

const Alimentos = () => {
    return (
        <Layaout>
            <div>  
        <div className="banner-div">
          <img src="static/imgs/albahaca.jpg" alt="" className="banner" />
          <div className="bannerText">
            <h1>Plantas de Alimentos</h1>
          </div>
        </div>
        <div id="fh5co-features">
          <div className="container">
            <input className="buscaSeccion" type="text" placeholder="Search.." />
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/fresa.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Fresa"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Fresa</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  
                  <img className="plant_img" src="static/imgs/Plantas/cebolla.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Cebolla"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Cebolla</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/ajo.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Ajo"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Ajo</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/lechuga.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Lechuga"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Lechuga</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/tomate_cherry.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Tomate_cherry"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Tomate Cherry</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/zanahoria.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Zanahoria"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Zanahoria</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Layaout>
    )
}

export default Alimentos