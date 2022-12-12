//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

//- Registra el error en un archivo a través de un try...catch
const logger = require('./logeer');

const miFunction = edad => {
    if(typeof edad == 'number' && edad > 18){
        console.log('Eres mayor de edad');
    }
    else if(typeof edad == 'number' && edad < 18){
        console.log('Eres menor de edad no puedes ingresar al sitio');
    }
    throw new Error('El valor a ingresar debe ser numerico');
}

try{
    console.log('El codigo esta ejecutandose correctamente');
    console.log(miFunction('hg'));
} catch(e){
    logger.error(e);
    logger.error('Error'); 
}
