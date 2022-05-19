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
			? resolve(`Employee: ${employee.name}, have salary: ${wage.salary}`)
			: reject(new Error('¡Fail ecercici 1.1!') )
	}
) 

async function functEmployees(empId){
    try {
        const employee = await getEmployee(empId)
        const message = await getSalary(employee)
        return message
    } catch (error) {
        return (`¡No! ${error.message}`) 
    }
}


// exercici Async / Await Nivell 2 - Exercici 1

const dobleNumber = number => {
    return new Promise( (resolve, reject) => { 
    !isNaN( number )  
        ? resolve( number * 2 )
        : reject( new Error('¡Fail ecercici 2.1!') )
    })
}

async function dobleIn2secFunctionAsync( numero ){
    try {
        const message =  await dobleNumber( numero )
        setTimeout( () => (`Doble of number ${numero} is ${message}`), 2000 )
    } catch (error) {
        return (`¡No! ${error.message}`) 
    }
}

// exercise Promise Nivell2 Exercici3

getEmployee(1)
	.then( valueEmp => 
		getSalary(valueEmp)
		.then( valueSal => 
			console.log(`Employee: ${valueEmp.name} have salary: ${valueSal.salary}`)
		)
	)

module.exports = {
    sum,
    rest,
    multiply,
    divide,
    functEmployees,
    dobleIn2secFunctionAsync,
    getEmployee,
    getSalary
}