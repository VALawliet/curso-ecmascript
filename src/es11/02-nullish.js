'use strict'

const num1 = null;

/* Agregar ?? luego de una variable númerica es como hacer
    if(num1 == null){
        num1 = 5;
    } */
const validate = num1 ??  5;
console.log(validate);