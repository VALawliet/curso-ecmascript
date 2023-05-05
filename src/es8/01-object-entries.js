'use strict'

//Object entries

const countries = {
    MX: 'México',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Perú'
};

/* Llamando a la propiedad .entries de Object
    y pasandole como valor un objeto a evaluar obtenemos toda la información
    del objeto vista como arreglos
    
    se ve así:
    
[
    ['MX', 'México'],
    ['CO', 'Colombia'],
    ['CL', 'Chile'],
    ['PE', 'Perú']

]

Esto es un array que contiene más arrays; array multidimensional**/
console.log(Object.entries(countries));