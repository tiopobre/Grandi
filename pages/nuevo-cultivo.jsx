import React, { useState, useContext } from 'react';
import Layaout from '../components/Layaout/layaout'
import Router from 'next/router'
import firebase from '../firebase';
// para añadir imagenes
var uniqid = require('uniqid');
//validaciones
import useValidacion from '../hooks/useValidacion'
import validarNuevoCultivo from '../validacion/validarNuevoCultivo'
import {FirebaseContext} from '../firebase' // context
// State Inicial
const STATE_INICIAL = {
    planta: '',
    alias: '',
    fechaIni: '',
    descripcion: '',
    img: '',
    urlImg:'ll',
    votos : 0,
}

const nuevoCultivo = () => {
    const {valores, errores, handleChange, handleSubmit} =  useValidacion(STATE_INICIAL, validarNuevoCultivo, agregarCultivo);
    const {planta, alias, fechaIni,img ,urlImg , descripcion } = valores;
    // State Imagenes
    const [imagen, setImagen] = useState(null);
    const [urlImagen, setUrlImagen] = useState('');
    // context con las crud de firebase
    const {usuario, firebase} = useContext(FirebaseContext);
    
    // Imagenes
    
    function cambioImagen (e){
        if(e.target.files[0]){
            setImagen(e.target.files[0]);
        }
       // console.log(uniqid.process());
       //crear id imagen
        setUrlImagen(uniqid('cultivo'));
        
        console.log( 'uniqId' ,uniqid('cultivo'));
    }

    const handleURL = () =>{
        firebase.storage
        .ref("test_imagenes")
        .child(imagen.name)
        .getDownloadURL()
        .then( url =>{
             console.log(url);
             setUrlImagen(url);
        }
        )
    }

    // agregar a firestore y storage
    async function agregarCultivo(){
            console.log('agregando cultivo...')
            if(!usuario){
                return Router.push('/login');
            }
            // Crear cultivo
            const cultivo = {
                planta: {planta},
                alias: {alias},
                fechaIni: {fechaIni},
                descripcion: {descripcion},
                urlImg: {urlImagen},
                comentarios: [],
                votos: 0
            }
            
            //insertar en la base de datos
            firebase.db.collection('cultivos').add(cultivo);
            firebase.storage.ref('test_imagenes').child(urlImagen).put(imagen);
        }

    return ( 
        <>
            <Layaout>
                <h2  className="d-flex justify-content-center">Nueo Cultivo</h2>
                <div className="d-flex flex-row bd-highligh justify-content-center">
                    <form 
                        onSubmit = {handleSubmit}
                    >
                      <div className="form-group">
                            <label >Planta</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name = "planta"
                                placeholder="Tipo de planta"
                                value = {planta}
                                onChange ={handleChange}
                            />
                            {errores.planta && <p>{errores.planta}</p>}
                        </div>
                        <div className="form-group">
                            <label >Alias</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name = "alias"
                                placeholder="alias de tu planta"  
                                value = {alias}
                                onChange ={handleChange}
                            />
                            <small 
                             
                            className="form-text text-muted"
                            >Dale un alias a tu cultivo.</small>
                        </div>

                        <div className="form-group">
                            <label >Sube una Imagen</label>
                            <input 
                                type = "file"
                                
                                onChange ={cambioImagen}
                            />  
                        </div>

                        <div className="form-group">
                            <label >Fecha Inicial</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                name = "fechaIni"
                                value = {fechaIni}
                                onChange ={handleChange}
                            />  
                            {errores.fechaIni && <p>{errores.fechaIni}</p>}
                        </div>
                        <div className="form-group">
                            <label >Descripcion Cultivo</label>
                            <input 
                                className="form-control" 
                                name = "descripcion"
                                value = {descripcion}
                                onChange ={handleChange}
                            />  
                        </div>
                        <button 
                            type="submit" 
                            value= "crear cultivo"
                            className="btn btn-lg btn-primary btn-block btn-signin"
                        >Agregar Cultivo</button>  
                    </form> 
                </div>
            </Layaout> 
        </>
     );
}
 
export default nuevoCultivo;