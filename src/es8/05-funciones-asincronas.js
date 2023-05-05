'use strict';

//Funciones asíncronas


//Creacioón de una función
const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        //El simbolo de pregunta representa un if statement
        ? setTimeout(()=>{
            return resolve('Async!!')
        }, 2000)
        //Los dos puntos representan un else
        : reject(new Error('Error!'));
    });


};

/* const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                return resolve('Async!!')
            }, 2000)
        }
        else{
            reject(new Error('Error!'));
        }

        
    });
 

};*/

const func1 = async()=>{
    //La palabra reservada asyinc le hace saber a javascript que esto es una función asíncrona y que, por tanto,
    //no deberá detener la ejecución del código por esta función
    const something = await fnAsync();
    //La palabrab reservada await antes del nombre de la función a esperar le dice a javascript que solo van a esperar
    //a que esté listo lo que haya dentro de la función
    console.log(something);
    console.log('Hello');
}

console.log('Before');
func1();
console.log('aftermath');