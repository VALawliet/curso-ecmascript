'use strict'

class bruhusuer{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //metodos

    /* Agregar la almohadilla antes de un método en una clase
    ocasiona que el método sea considerado privado y, por ende, solo
    puede ser usado dentro de la clase. Hay que tener mucho cuidado con esto */
    #speak(){
        return 'hey';
    }

    #greeting(){
        return `${this.#speak()} ${this.name}`;
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