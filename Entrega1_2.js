// Nivell1 Exercici1
const number1 = 10
const number2 = 20

const makeSum = ( () => console.log( `Sum is ${number1 + number2}`) ) ()


// Nivell2 Exercici1
const createObject = (name) => ({ name })

console.log( createObject('Andrea') )


// Nivell2 Exercici2
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
function Abstract() {
    if (this.constructor == Abstract) {
        throw new Error("You cannot create an instance of Abstract class ");          
    }
}

Abstract.prototype.info = function() { return `Message is: ${this.message}` }

function createObj(message) { this.message = message }

createObj.prototype = Object.create(Abstract.prototype)

const object1 = new createObj('Everything you want')

console.log( object1.message )
console.log( object1.info() ) 
console.log( object1 ) 