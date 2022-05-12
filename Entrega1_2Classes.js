// Nivell1 Exercici1
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

const makeSum = ( ( number1, number2 ) => console.log( `Sum is ${number1 + number2}`) ) ( 5, 6 )


// Nivell2 Exercici1
// Crea una arrow function que, rebent un paràmetre, 
//retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const createObject = (name) => ({ name })

console.log( createObject('Andrea') )


// Nivell2 Exercici2
// Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
// La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
// Invoca el mètode dirNom des de fora de la classe.

class Persona {
    constructor( nom ) {
        this.name = nom
    }
    dirNom () {
        console.log( `My name is ${this.name}` )
    }
}

const soyYo = new Persona( 'Andrea' )
soyYo.dirNom()


// Nivell3 Exercici1  Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
// Invoca-la amb diferents definicions.

class Abstract {
    constructor(){
        if (this.constructor == Abstract) {
        throw new Error("You cannot create an instance of Abstract class ")
        }          
    }
    info(){
        throw new Error("Abstract Method has no implementation")
    }
}

function createObj(message) { 
    this.message = message 
    Abstract.prototype.info = function() { return `Message is: ${this.message}` }
}

createObj.prototype = Object.create(Abstract.prototype)

const object1 = new createObj('Everything you want')
const object2 = new createObj('Sum of 1+1 is ...')

console.log( object1.message )
console.log( object1.info() ) 
console.log( object2.message )
console.log( object1 instanceof createObj);
console.log( object1 instanceof Abstract);