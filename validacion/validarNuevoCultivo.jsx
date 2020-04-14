export default function validarNuevoCultivo(valores){
    let errores = {};

    // validar Planta
    if(!valores.planta){
        errores.planta = "La planta es obligtorio"
    }

    // validar la fecha inicial
    if(!valores.fechaIni){
        errores.fechaIni = "La fecha es obligatoria"
    }

    return errores;
}