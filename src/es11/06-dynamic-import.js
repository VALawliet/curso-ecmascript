'use strict'

const button = document.querySelector("#btn");

/* Importando un modulo dentro de un EventListener utilizando las palabras
reservadas async await para generar una función asíncrona que no interfiere
con el comportamiento del resto del código. Sin embargo, luego del await estamos
mandando a llamar al modulo para poder usar todas sus funcionalidades y, en sí mismo,
module se guarda en una variable como si fuese un objeto y todo lo que tenga dentro
serían sus métodos */
button.addEventListener('click', async function(){
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})