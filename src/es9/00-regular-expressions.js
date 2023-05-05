'use strict'

const regex = /(\d{4})-(\d{2})-(\d{2})/;

//Honestamente no entendí nada de esta clase. Debería ponerme a aprender cosas sobre las expresiones regulares

const matchers = regex.exec('2022-01-01');

console.table(matchers);