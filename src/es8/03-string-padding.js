'use strict';

const string = 'Hello';

console.log(string.padStart(10, '_'));

/* añadiendo el método .padStart() a un string y
    pasandole como primer argumento la cantidad de espacio a utilizar por el nuevo string y,
    como segundo el cáracter utilizado para rellenar el espacio restante, podemos crear un string nuevo 
    en el que está tomando como base a 'string' para crear un string de más eleemntos y rellenar el espacio
    restante de esos elementos con algo. */

console.log(string.padEnd(10, '_'));

/* el método .padEnd() hace exactamente lo mismo que el otro, pero al final */

