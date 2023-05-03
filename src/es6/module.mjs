'use strict'
//!The extension .mjs lets javascript know that this file is a module.

//Creando una función dentro de un modulo
const hello = () =>{
    console.log("Hello!");
}


//Agregando las palabras reservadas export default para dejarle saber a javascript que la función se puede exportar.
export default hello;

//!Necesitas decirle al archivo .json que dentro del proyecto vamos a estar trabajandoc con modulos.