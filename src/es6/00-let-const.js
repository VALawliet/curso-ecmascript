var lastname = 'Víctor';
lastname = 'uwu';
console.log(lastname);

let fruit = 'apple';
fruit = 'banana';

console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () =>{
    if(true){
        var fruits1 = 'apple'; //function scope
        let fruits2 = 'kiwi'; //block scope
        const fruits3  = 'banana'; //block scope
    }

    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);

}

fruits();