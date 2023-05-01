'use strict'

//Destructuración

//Trabajando con arrays

let fruits = ['apple', 'banana'];

/* La destructuración sirve para acceder a los elementos
    de un array u objeto de una forma más entendible para
    los humanos */
let [a, b] = fruits;

console.log(a,b);

//Trabajando con objetos

let user = {username: 'Oscar', age: 34};

/* Se crean variables a partir de lso nombre 
    de los atrtibutos en un objeto */

let {username, age} = user;
console.log(username, age);

//Spread operator

let person = {
    name: 'Víctor',
    age: 17,
};
let country = 'Spain';

/*//Agregar tres puntos antes de referenciar un objeto dentro de otro  
    Da a entender que se pondrán todos los elementos de ese objeto dentro del nuevo.*/

let data = {
    id: 1, ...person, country
};

console.log(data);

//Parametros rest

function sum(num, ...values){
    /* Agregar tres puntos antes del nombre del parámetro a referenciar
        dentro de la función da a entender que no se sabe la cantidad de
        parámetros que le llegarán a la función. */
    console.log(values);
    console.log(num + values[2]);
}

sum(2, 3, 5, 656, 83);