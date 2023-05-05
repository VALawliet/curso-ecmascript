'use strict'

const countries = {
    MX: 'México',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Perú'
};
/* Object.values actua muy parecido a Object.entries(). Sin embargo,
    .values nos devolverá un array simple solo con los valores de cada propiedad
    dentro del objeto */
console.log(Object.values(countries));