// Nivell1 Exercici1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent 
//depenent de si la Promise es resol o no.

let myPromise = () => { 
	return new Promise( (resolve, reject) => {
		setTimeout( () => resolve('¡Right!'), 250)
		setTimeout( () => reject( new Error( '¡Wrong!' ) ), 280)
	}) 
}
const successCallback = value => console.log( `¡Yes! ${value}` ) 
const failureCallback = error => console.log( `¡No! ${error.message}` )

myPromise()
	.then( successCallback )
	.catch( failureCallback ) 


// Nivell1 Exercici2
//Crea una arrow function que rebi un paràmetre i una funció callback 
//i li passi a la funció un missatge o un altre 
//(que s'imprimirà per consola) en funció del paràmetre rebut.

const giveMessage = ( message ) => console.log( message )

const myFunction = (parameter, callback) => callback(parameter) 

myFunction('Hola Andrea', giveMessage)

    

// Nivell2 Exercici1
//Donats els objectes employees i salaries, crea una arrow function getEmployee() 
//que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = empId => 
	new Promise( (resolve, reject) => { 
		let worker = employees.find( element => element.id == empId)
	
		worker 
			? resolve(worker)
			: reject(new Error('¡Failure!') )
	}
) 

getEmployee(2)
	.then(value => console.log(`Found employee: ${value.name}`))
	

// Nivell2 Exercici2
// Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee 
//i retorni el seu salari.

const getSalary = employee => 
	new Promise( (resolve, reject) => { 
		let wage = salaries.find( element => element.id == employee.id)
	 
		wage  
			? resolve(wage)
			: reject(new Error('¡Failure!') )
	}
) 

getSalary(employees[1])
	.then(value => console.log(`Found salary: ${value.salary}`))


// Nivell2 Exercici3
// Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

getEmployee(1)
	.then( valueEmp => 
		getSalary(valueEmp)
		.then( valueSal => 
			console.log(`Employee: ${valueEmp.name} have salary: ${valueSal.salary}`)
		)
	)


//Nivell3 Exercici1
// Fixa un element catch a la invocació del nivell anterior 
//que capturi qualsevol error i el mostri per la consola.

getEmployee(5)
	.then( valueEmp => 
		getSalary(valueEmp)
		.then( valueSal => 
			console.log(`Employee: ${valueEmp.name} have salary: ${valueSal.salary}`)
		)
		.catch(failureCallback)
	)
	.catch(failureCallback)