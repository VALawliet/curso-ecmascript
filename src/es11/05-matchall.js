const regex = /\b(Apple)+\b/g;

/* Usando expresiones regulares para filtrar textos
utilizando un bucle for of */

const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc..';

for(let match of fruit.matchAll(regex)){
    console.log(match);
}