// Nivell1 Exercici1
const number1 = 10
const number2 = 20
const sumNumbers = number1 + number2

const makeSum = ( () => console.log( `Sum is ${sumNumbers}`) ) ()


// Nivell2 Exercici1
const createObject = (nom) => { return {name: nom} }

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


// Nivell3 Exercici1  Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
class Abstract {
    constructor() {
      if (this.constructor == Abstract)
        throw new Error("You cannot create an instance of Abstract class ");      
      }
      
      info() {
          throw new Error(" Added abstract Method has no implementation");
      }
  }

class Object extends Abstract {
    info(text) {
        console.log(`${text}`);
    }
}

function createObj(message) {
  const obj = new Object()
  obj.info(message) 
}

createObj('Hola Mundo')
