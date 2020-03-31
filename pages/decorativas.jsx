import React from 'react';
import Layaout from '../components/Layaout/layaout';
import Footer from '../components/Layaout/footer';
import Link from 'next/link';

const Decorativas = () => {
    return (
        <Layaout>
            <div>  
        <div className="banner-div">
          <img src="static/imgs/viola_tricolor.jpg" alt="" className="banner" />
          <div className="bannerText">
            <h1>Plantas Decorativas</h1>
          </div>
        </div>
        <div id="fh5co-features">
          <div className="container">
            <input className="buscaSeccion" type="text" placeholder="Search.." />
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/perenne.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Perenne Chino</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  
                  <img className="plant_img" src="static/imgs/Plantas/cactus.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Cactus Blanco</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/cinta.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Planta Cinta</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/bambu.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Bambú</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/peperomia.jpg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Peperomia Watermelon</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <img className="plant_img" src="static/imgs/Plantas/hoja_rota.jpeg" alt="" />
                  <div className="feature-copy">
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    <Link href="/Desc_Planta"><p><a href="#">Learn More <i className="icon-arrow-right22" /></a></p></Link>
                    <h3>Hoja Rota</h3>
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

export default Decorativas