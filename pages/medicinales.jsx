import React from 'react';
import Layaout from '../components/Layaout/layaout';
import Footer from '../components/Layaout/footer';
import Link from 'next/link';

const Medicinales = () => {
    return (
        <Layaout>
            <div>  
        <div className="banner-div">
          <img src="static/imgs/hiperico.jpg" alt="" className="banner" />
          <div className="bannerText">
            <h1>Plantas Medicinales</h1>
          </div>
        </div>
        <div id="fh5co-features">
          <div className="container">
            <input className="buscaSeccion" type="text" placeholder="Search.." />
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/aloe.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Aloe Vera</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  
                  <img className="plant_img" src="static/imgs/Plantas/manzanilla.png" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Manzanilla</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/caballo.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Cola de Caballo</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/tomillo.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Tomillo</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/oregano.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Orégano</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/ajenjo.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Ajenjo</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            <Footer/>
        </Layaout>
    )
}

export default Medicinales