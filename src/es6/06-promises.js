'use strict'

const anotherFunction = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Heyyy');
        }else{
            reject('Oof');
        }
    })
}

anotherFunction().then(response => console.log(response)).catch(err => console.log(err));


//Explicación de otro vídeo

/* Lista de objetos de películas */

const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2019
},{
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];

/* const getData = ()=>{
    return datos
} */


/* Creación de la función de tipo flecha */
const getData = ()=>{

    /* Dentro de la función creamos una promesa.
    La promesa recibe como parametro una función de callback la cual,
    en sí misma, recibe como parametros dos cosas: 1. resolve; 2. reject.
    el primer parametro es la obtención de la información si la promesa se logra resolver.
    Por otra parte, reject es el error que se devolverá si nunca se resuelve 
    la promesa. Cabe recalcar que ambos parametros de la función de callback
    son funciones en sí mismas.  */
    return new Promise((resolve, reject) =>{

        if(true){

            /* Utilizando la función setTimeOut() para simular el comportamiendo de
                una API. Esta función recibe dos parámetros, el primero es una función de callback
                que por dentro tendrá la acción a realizar; el segundo es el tiempo que se tardará en ejecutar.
                Recordemos que esto último es para simular el comportamiento de una API.*/
            setTimeout(() =>{
                /* Obtención de los datos con la función resolve de la promesa */
                resolve(datos);
            }, 1500);
        }else{

            /* Llamando a la función reject de la promesa para mandar el error. */
            reject(new Error('idk'));
        }
        
    })
    
}

/* Llamando a la función.

Es importante recordar que la función getData() va a retornar un objeto de clase 'Promesa'. Por ende,
podemos acceder al método 'then' de la promesa que se utiliza para mostrar el resultado esperado.
No obstante, también podemos llamar al método 'catch' que se utiliza para mostrar el error en caso de que
no se puedan obtener los datos */
getData().then((object) =>{
    console.log(object);
}).catch((err) => console.log(err.message));