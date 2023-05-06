'use strict'

const array = ['one', 'two', 'three', 'four', 'five', 'six'];

console.log(array[array.length - 1]);

/* llamando al método at() de un array y pasandole de parámetro el índice al que querramos
acceder nos devolverá el elemento con ese índice. Sin embargo, .at() también 
acepta valores negativos y, si el valor es negativo, empezará a contar desde el final del array */
console.log(array.at(-1));