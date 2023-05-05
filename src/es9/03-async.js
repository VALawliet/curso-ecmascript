'use strict';

async function* generator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
};

const func = generator();


func.next().then((response)=>{console.log(response.value)});

//Nota: console.log() siempre siendo retornado por la arrow function
func.next().then((response)=>{console.log(response.value)});

func.next().then((response)=>{console.log(response.value)});

console.log('hey');

async function names(arr){
    for await (let value of arr){
        console.log(value);
    }
};

const names1 = ['Víctor', 'Law', 'Zero', 'Nya'];

names(names1);