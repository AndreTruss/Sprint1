//Nivell1 Exercici1
let giveName = (nombre) => console.log(`My name is ${nombre}`)

giveName('Andrea')

//Nivell2 Exercici1
const nome = 'Andrea'
const cognome = 'Trussardi'

let giveName1 = (name, surname) => console.log(`My name is ${name} ${surname}`)

giveName1(nome, cognome)

//Nivell2 Exercici2
const giveName2 = () => {
    const name = 'Andrea'
    return name
}

console.log( `My name is ${ giveName2() }` )

// Nivell3 Exercici1
const arrayFunctions = []

const countNumber = () => { for ( let i = 0; i < 10; i++ ) console.log( i ) }
    
for ( let i = 0; i < 10; i++ ) arrayFunctions.push( countNumber ) 

for (let funct of arrayFunctions) funct() 

//Nivell3 Exercici2
const giveName3 = ( (name) => console.log (`My name is ${name}`) ) ('Andrea')