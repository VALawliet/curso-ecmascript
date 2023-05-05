'use strict'

//Inclución del método .includes() que nos permite saber si un valor existe dentro de un array;
const arr = [1, 2, 3, 4, 5, 6];
//includes siempre devuelve true o false
console.log(arr.includes(7));

//includes pero en objetos

const object = {
    banana: true,
    apple: false,
    watermelon: true
};

//El operador 'in' en objetos nos permite revisar si un objeto contiene o no una propiedad;
console.log(true in object);

//.hasOwn()
/* llamando al método .hasOwn() del objecto Object nos permite
    evaluar la existencia de una propiedad dentro de un objeto
    cuando le pasamos como primer argumento al objeto a evaluar
    y luego a la propiedad que queremos saber si está en él o no */
console.log(Object.hasOwn(object, 'banana'));

