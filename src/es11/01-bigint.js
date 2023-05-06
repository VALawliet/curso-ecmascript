'use strict'


//Agregar la n al final de un número grande le deja saber a Javascript que trabaja con valores grandes

const num = 743573854735734957379435784n;

/* Usando la función BigInt() y pasandole el número grande que deseemos como
    argumento nos dará el mismo resultado que agregar la n solita */
const bigNum = BigInt(743573854735734957379435784);

console.log(num);
console.log(bigNum);



