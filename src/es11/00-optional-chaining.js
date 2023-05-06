'use strict';

//Optional chaining

const users = {
    law: {
        country: 'Spain'
    },

    zero: {
        country: 'Germany'
    }
}

console.log(users.law.country);


//!Estpo arroja error porque no existe
console.log(users.developer.country);

//Esto no arroja error porque estamos preguntando si existe
//Si las propiedades no existen, solamente arroja 'undefined'
console.log(users?.developer?.country);