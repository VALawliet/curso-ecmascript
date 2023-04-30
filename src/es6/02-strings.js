'use strict'

let hello = "hello";
let world = "world";

let phrase = hello + ' ' + world;

console.log(phrase);

//Template literals

let epicPhrase = `${hello} ${world}!`;

console.log(epicPhrase);

//Strings de multi línea

/* Importancia de la comilla francesa.

    `` esas son las comillas francesas; estas son muy útiles 
    al momento de usar la nomenclatura del signo del dolar para
    referenciar variables de una forma más limpia dentro de los strings.
    Además, también nos permite hacer uso de los Template Literas;
    esto significa que si necesitamos hacer un string de múltiples líneas,
    las comillas francesas nos permiten realizarlo sin problemas debido a que
    podemos dar 'Enter' dentro de ellas.


*/

let lorem = 'esto es un string \n ' + 'Esta es otra línea.';

let lorem2 = `Esta es una frase de multi línea.
    Esta es la continuación de la frase épica.`;

console.log(lorem);
console.log(lorem2);

