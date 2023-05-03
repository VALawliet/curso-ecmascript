'use strict'


//Declaración de una clase
class User{

};


//Creación de una instancia de la clase

/* const newUser = User(); */

class user{
    //Métodos

    greeting(){
        return 'Hello'
    };


};

const Law = new user();
console.log(Law.greeting());

const developer = new user();

console.log(developer.greeting());


//Constructor

class user2{
    //constructor


    //El constructor añade las características por defecto que compartirán todas las instancias de una clase
    //Para crear el constructor se usa la palabra reservada 'constructor()'

    constructor(){
        console.log('Nuevo usuario');
    }

    //Metodo
    greeting(){
        return 'Hello'
    }
}

const zero = new user2();

//this palabra reservada

class newUseruwu{

    //El constructor puede recibir parametros que se deberán especificar al crear la instancia de la clase
    constructor(name){

        //this hace referencia a la instancia creada a partir de la clase
        this.name = name;
    }

    //métodos

    speak(){
        return 'Hello';
    }

    greeting(){

        //Llamando al metodo .speak() de la instancia creada y usandolo dentro de otro metodo.
        //NOTA: 'this' hace referencia a la instancia creada.
        return `${this.speak()} ${this.name}`
    }
}

const useruwu = new newUseruwu('useruwu');
console.log(useruwu.greeting());


//setters and getters

class bruhusuer{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //metodos

    speak(){
        return 'hey';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    //El getter solamente obtiene y guarda el valor de una propiedad de la clase
    get uAge(){
        return this.age
    }

    //El setter cambia el valor de una propiedad de clase al momento de ser llamado y especificado el valor a cambiar.
    set uAge(n){
        this.age = n;
    }
}


const bruhUwU = new bruhusuer('bruhUwU', 17);
console.log(bruhUwU.uAge);
console.log(bruhUwU.uAge = 20);