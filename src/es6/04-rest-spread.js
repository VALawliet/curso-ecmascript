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
