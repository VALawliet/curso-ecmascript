'use strict'

//Creando promesas
const promise1 = new Promise((resolve, reject) =>{return reject('Rejectado uwu')});

const promise2 = new Promise((resolve, reject)=>{return resolve('Resolvido uwu')});

const promise3 = new Promise((resolve, reject)=>{return resolve('Resolvido otra vez Uwu')});

/* El atributo allSettled recibe como argumento una lista de promesas y, como el objeto en sí mismo es una promesa,
    utilizamos el atributo .then() para obtener el resultado.
    
    All Settled nos devuelve una lista de objetos cuyo tamaño depende de la cantidad de promesas que hayan sido puestas como argumento,
    En este caso, la lista de objetos de las promesas es guardada en la variable 'something' para poder realizar operaciones con ella.
    Como ejemplo tenemos un recorrido de la lista de objetos donde 'element' es cada objeto dentro de la lista y, como element es un objeto en sí mismo,
    podemos acceder a sus valores. No obstante, los valores pueden variar dependiendo si las promesas fueron resueltas o no; si la promesa dio un reject,
    su segundo valor será 'reason'; si la promesa dio un resolve, el segundo valor del objeto será un 'value'. Esta es la razón por la que dentro del bucle
    for of se realiza la validación sobre la existencia del valor 'reason' en los objetos porque, si éste no existe, se devolverá el valor 'value' y viceversa.*/

Promise.allSettled([promise1, promise2, promise3]).then((response) => {
    
    var something = response;
    for(let element of something){
        console.log(element);
        if(element.reason == undefined){
            console.log(element.value);

        }else{
            console.log(element.reason)
        }
    }});



