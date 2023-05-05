'use strict';

//Pasar un array a objeto

const entries = new Map([["name", "Víctor"], ["age", 17]]);
const entries2 = [["name", "uwu"], ["age", Infinity]];

/* Con la propiedad fromEntries() de Object podemos convertir arrays dentro
de arrays a objectos donde el primer elemento del array interno sea la propiedad del objeto */
console.log(Object.fromEntries(entries));
console.log(Object.fromEntries(entries2));