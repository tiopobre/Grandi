import app from 'firebase/app';
import'firebase/auth';
import'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './config'

class Firebase{
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    //**********************************************************************
    //********************************************************************** 
    //********************** Funciones de Firebase ************************* 
    //********************************************************************** 
    //**********************************************************************

    //************************************************************* 
    //******************** Autenticacion ************************** 
    //************************************************************* 

    //Registrar usuario E-mai Contraseña
    async registrar(nombre , email, password){
        const  nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);
        return await nuevoUsuario.user.updateProfile({
            displayName : nombre
        })
    }
    // Autenticar usuario
    async login(email,password){
        return await this.auth.signInWithEmailAndPassword(email,password);
    }

     // Cerrar sesion de usuario
     async cerrarSesion(){
         await this.auth.signOut();
     }

    //************************************************************* 
    //******************** Base De Datos ************************** 
    //************************************************************* 

}

const firebase = new Firebase();

export default firebase;

