'use strict'

const promise1 = new Promise((resolve, reject) =>{return reject('Rejectado uwu')});

const promise2 = new Promise((resolve, reject)=>{return resolve('Resolvido uwu')});

const promise3 = new Promise((resolve, reject)=>{return resolve('Resolvido otra vez Uwu')});

/* El atributo any() recibe como parámetro una lista de promesas y, como tal, solo devolverá la primera promesa
    cuyo resultado sea satisfactorio*/

Promise.any([promise1, promise2, promise3]).then((response)=>{
    console.log(response)
})

