import app from 'firebase/app';
import'firebase/auth';
import firebaseConfig from './config'

class Firebase{
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    }

    //************************************************************* 
    //***************** Funciones de Firebase ********************* 
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
}

const firebase = new Firebase();

export default firebase;

