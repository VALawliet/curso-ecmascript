'use strict';

//Matrices

const array1 = [1, 3, 5, [2, 4, 6, [7, 21] ] ];
//flat nos permite deshacernos de los arrays dentro de otros arrays
/* Recordemos que flat es un método y, por argumento, debemos pasarle la cantidad de capas
    de profundidad que deberá recortar del array.
    Ejemplo: si tenemos un array dentro de otro array, solo hay una capa
    a quitar. No obstante, si hay un array dentro del array que está dentro del otro array, son dos capas a quitar */
console.log(array1.flat(3));

//flatMap

const array2 = [1, 2 , 3, 4, 5];

//Utilizando flatmap
console.log(array2.flatMap((value)=>{ return [value * 3]}));


//utilizando map primero y luego aplicandole un flat
/* Recordemos que el método map recibe como parametro una función
    de callback que devolverá cada elemento dentro de un array en sí mismo */
const smth = array2.map((value) =>{return [value, value * 3]});
console.log(smth)

console.log(smth.flat(2));
