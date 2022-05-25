// function sum, rest, multiply and divide

const sum = ( a, b, c ) => { return (a + b + c ) }
const rest = ( a, b, c ) => { return (a - b - c ) }
const multiply = ( a, b, c ) => { return (a * b * c ) }
const divide = ( a, b ) => { return (a / b ) }


// exercici Async / Await Nivell 1 - Exercici 1

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
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
			: reject(new Error('¡Fail exercici 1.1!') )
	}
) 

const getSalary = employee => 
	new Promise( (resolve, reject) => { 
		let wage = salaries.find( element => element.id == employee.id)
	 
		wage  
			? resolve(wage)
			: reject(new Error('¡Fail ecercici 1.1!') )
	}
) 

async function functEmployees(empId){
    try {
        const employee = await getEmployee(empId)
        const salaryEmp = await getSalary(employee)
        return `Employee: ${employee.name}, have salary: ${salaryEmp.salary}`
    } catch (error) {
        return (`¡No! ${error.message}`) 
    }
}


// exercici Async / Await Nivell 2 - Exercici 1

const dobleNumber = number => {
    return new Promise( (resolve, reject) => { 
    !isNaN( number )  
        ? setTimeout( () => resolve( `Doble of number ${number} is ${number * 2}` ), 2000 )
        : reject( new Error('¡Fail ecercici 2.1!') )
    })
}
async function dobleNumberAsync( num ){
    try {
        const result = await dobleNumber( num )
        console.log(result)
    } catch (error) {
        return (`¡No! ${error.message}`) 
    }
}

// exercise Promise Nivell2 Exercici3

getEmployee(1)
	.then( valueEmp => 
		getSalary(valueEmp)
		.then( valueSal => 
			{ return (`Employee: ${valueEmp.name}, have salary: ${valueSal.salary}`) }
		)
	)

// exercise Classes Nivell2 Exercici2
// I have created a specific file Persona.js containing class Persona for testing with mock


// exercise Classes Nivell 3 Exercici1

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
Abstract.prototype.info = function() { return `Message is: ${this.message}` }

function createObj(message) { 
    Abstract.prototype.message = message 
}

createObj.prototype = Object.create(Abstract.prototype)

module.exports = {
    sum,
    rest,
    multiply,
    divide,
    functEmployees,
    dobleNumberAsync,
    getEmployee,
    getSalary,
    createObj
}