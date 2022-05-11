// Nivell1 Exercici1

let myPromise = () => { return new Promise( (resolve, reject) => {
	setTimeout(function() {
		resolve('¡Right!')
	}, 250)
	setTimeout(function() {
		reject('¡Wrong!')
	}, 280)
}) 
}
const successCallback = (value) =>  console.log(`¡Yes! ${value}`) 
const failureCallback = (error) => console.error(`¡No!${error}`)

myPromise().then(successCallback).catch(failureCallback)


// Nivell1 Exercici2

function callback( element ) {
	element > 1 ? console.log('¡Success!') : console.error('¡Fail!')
}

let myFunction = (parameter) => { callback(parameter) }

//myFunction(1)
//myFunction(2)
    

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

const getEmployees = ( (worker) => { 
	let ind = employees.findIndex( (ele) => ele.id == worker.id )
	//console.log(ind) 
	return new Promise( (myresolve, myreject) => {
	ind !== -1
	? myresolve(console.log(`¡Success! Found employee: ${worker.name}`) )
	: myreject('¡Failure!')
} ) 
})
/* getEmployees()
.then(successCallback)
.catch(failureCallback) */

getEmployees(employees[0])
	

// Nivell2 Exercici2

/* const getSalary = (worker) => { 
	const index = employees.findIndex(indice => indice == worker) 
	console.log(`Salary of employee ${worker.name} is ${salaries[index].salary}`) 
} 
getSalary(employees[0])
getSalary(employees[2]) */

// Nivell2 Exercici3

