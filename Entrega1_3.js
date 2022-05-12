// Nivell1 Exercici1

/* /* let myPromise = () => { return new Promise( (resolve, reject) => {
	setTimeout( () => resolve('¡Right!'), 250)
	setTimeout( () => reject('¡Wrong!'), 280)
}) 
} */
const successCallback = (value) =>  console.log(`¡Yes! ${value}`) 
const failureCallback = (err) => console.log(err.message)

/* myPromise()
.then(successCallback)
.catch(failureCallback) */ 


// Nivell1 Exercici2

const giveMessage = ( message ) => console.log( message )

const myFunction = (parameter, callback) => callback(parameter) 

myFunction('Hola Andrea', giveMessage)

    

// Nivell2 Exercici1

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

const getEmployees = (empId) => new Promise( (resolve, reject) => { 
	let worker = employees.find( element => element.id == empId)
	console.log(worker) 
	 
	if ( worker ){
		const message = (`¡Success! Found employee: ${worker.name}`)
		resolve(message)
	}
	else{ reject(new Error('¡Failure!') )}
} ) 

getEmployees(2)
.then(successCallback)
.catch(failureCallback)

//getEmployees(2)
	

// Nivell2 Exercici2

/* const getSalary = (worker) => { 
	const index = employees.findIndex(indice => indice == worker) 
	console.log(`Salary of employee ${worker.name} is ${salaries[index].salary}`) 
} 
getSalary(employees[0])
getSalary(employees[2]) */

// Nivell2 Exercici3

