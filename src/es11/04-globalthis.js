'use strict';

console.log(window); // del lado del navegador

console.log(global); //del lado de node

console.log(self); //del lado de webworker


/* globalThis nos permite acceder a funciones sin importar donde esté
siendo ejecutado nuestro código de Javascript*/
console.log(globalThis); //