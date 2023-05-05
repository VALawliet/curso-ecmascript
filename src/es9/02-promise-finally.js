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

anotherFunction().then((response) => {
    console.log(response)})

    .catch((err) => {
        console.log(err)})

    .finally(()=>{
        console.log('Promesa terminada')});

//el método finally() de las promesas se ejecutará sin importar si  hubo un error o se realizó correctamente la tarea; simplemente indica la finalización de la promesa.
//finally recibe como parámetro una arrow function