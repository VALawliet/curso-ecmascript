'use strict'

//Generadores


//A la palabra reservada function se le agrega un asterisco al final para indicar que es un generador
function* iterate(arr){

    //Utilizando un bucle for of para recorrer un array
    for(let value of arr){

        //La palabra reservada yield se utiliza para recordar cada instancia del recorrido del bucle
        yield value;
    }
};

let array1 = [1, 2, 3, 4, 5, 6, 7];


//Se crea una constante desde la que se llama al generador pasandole el array creado con anterioridad como argumento
const it = iterate(array1);

//Se utiliza el método .next() que viene por defecto para todas las funciones generadores. Además, también podemos acceder a la propiedad .value dentro de ellas
console.log(it.next().value);
console.log(it.next().value);
