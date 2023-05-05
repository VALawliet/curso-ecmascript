'use strict';

const user = {
    username: 'Law',
    age: 17,
    country: 'SP'
};



/* Usando el spread operator con objetos */
const {username, ...values} = user;

console.log(username);
console.log(values);