'use strict'

//Enhanced object literals

function newUser(user, age, country){
    return {
        user: user,
        age: age,
        country: country
    }
}

//ambas formas son válidas al momento de retornar objetos

/*//Sin embargo, la segunda debe de tener exactamente los mismos 
    nombres de los parámetros para que la lógica de ecmascript
    cobre efecto*/

function newUser1(user, age, country){
    return {
        user,
        age,
        country
    }
}

console.log(newUser('law', 17, 'spain'));
console.log(newUser1('law', 17, 'Nic'));