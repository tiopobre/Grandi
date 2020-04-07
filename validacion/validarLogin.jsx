export default function validarCrearCuenta(valores){
    let errores = {};

    // validar el e-mail de usuario
    if(!valores.email){
        errores.email = "El e-mail es obligtorio"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email = "El e-mail no es valido"
    }

    // validar el password
    if(!valores.password){
        errores.password = "El Password es obligtorio"
    }
    return errores;
}