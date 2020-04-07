import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase';
import useAutentificacion from '../hooks/useAutenticacion';
const MyApp = props => {
    const usuario = useAutentificacion();
    console.log(usuario);
    const {Component, pageProps} = props;
    return(
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
        >
            <Component{...pageProps}/>
        </FirebaseContext.Provider>   
    )
}

export default MyApp;