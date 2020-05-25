import React from 'react';
import Layaout from '../components/Layaout/layaout';
import Seccion from '../components/Dinamicos/seccion'


const infoPlanta = () => {
  
  return (
      <Layaout>
         <div className="container">
           <div class="row justify-content-md-center">
              <h1 className="col-md-auto planta"><b>Tomate</b></h1>
           </div>
           <div class="row justify-content-md-center">
              <h4 className="col-md-auto planta"><b>(Plantación)</b></h4>
           </div>
           <br /><hr className="linea-separada" /><br />
           <div className="row align-items-center">
                  <div className="col">
                      <div className="row align-items-center contenido-primero">
                          <h4 className="col-md-auto hunoo">En regiones de clima suave se deben sembrar las semillas en marzo, y en abril en climas más fríos.
                           Es recomendable hacerlo en un semillero, cubriendo cada semilla con medio centímetro aproximadamente de tierra. 
                           Luego, regaremos cuidadosamente para no mover demasiado la tierra, y la mantendremos húmeda hasta la aparición de los primeros brotes.
                           Cuando veamos que las plantas están más o menos desarrolladas (tienen ya al menos 4 hojas), las trasladaremos al lugar donde deseemos crear nuestro huerto, bien sea a tierra libre como a cajones o mesas de cultivo. 
                           Debemos cogerlas desde la parte del tallo más próxima a la tierra, y arrancarlas de la misma con firmeza pero con cuidado.</h4>
                      </div>        
                  </div>
                  <div>
                      <div className="col contenido-segundo">
                          <div className="icono"> 
                             <img src="static/imgs/soja.png" alt=""/>
                          </div>
                      </div>
                  </div>
           </div>
  
              <br /><hr className="linea-separada" /><br />
           
              <div className="row align-items-center">
                  <div>
                      <div className="col contenido-segundo">
                          <div className="icono"> 
                          <img src="static/imgs/regadera.png" alt=""/>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row align-items-center contenido-primero">
                          <h1 className="col planta"><b></b></h1>
                          <h4 className="col-md-auto hunoo">Las enterraremos de nuevo en su nueva ubicación, cubriendo de tierra el tallo hasta donde empiezan las primeras hojas. Regaremos de forma abundante y regular.
                          Los tutores son palos que debes instalar al lado de cada planta. Unos 15 o 20 días después del trasplante, sujetaremos cada tomatera a su tutor. Este procedimiento es necesario en todos los casos, </h4>
                      </div>        
                  </div>
             </div>
           <br /><hr className="linea-separada" /><br />
           <div className="row align-items-center">
                  <div className="col">
                      <div className="row align-items-center contenido-primero">
                          <h1 className="col planta"><b></b></h1>
                          <h4 className="col-md-auto hunoo">Puedes podar las plantas entre mayo y julio, y siempre deberemos realizar las sucesicas podas cortando por encima de las ramas de las flores. 
                         Al final puedes recoger los tomates de  julio hasta agosto, en función del grado de madurez de los tomates, que es de sencilla evaluación, según su color y consistencia.</h4>
                      </div>        
                  </div>
                  <div>
                      <div className="col contenido-segundo">
                          <div className="icono"> 
                          <img src="static/imgs/dom.png" alt=""/>
                          </div>
                      </div>
                  </div>
           </div>
           
        </div>
      </Layaout>
  )
}
 
export default infoPlanta;