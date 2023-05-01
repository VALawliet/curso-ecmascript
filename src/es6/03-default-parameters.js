'use strict'

//Forma antigua de agregar valores por defecto
function users(name, age, country){
    var name = name || 'No name';
    var age = age || NaN;
    var country = country || 'None';

    console.log(name, age, country);
}

users();
users('vic', 12, 'spain');

//Nueva forma de agregar valores por defecto a los parámetros

//Se igualan los parametros a un valor por defecto
function admin(name = null, age = NaN, uwu = 'uwu'){
    console.log(name, age, uwu);
}

admin();
admin('uwu', 987, "Soy el dueño de tu alma")