// function sum, rest, multiply and divide

const sum = ( a, b, c ) => { return (a + b + c ) }
const rest = ( a, b, c ) => { return (a - b - c ) }
const multiply = ( a, b, c ) => { return (a * b * c ) }
const divide = ( a, b ) => { return (a / b ) }



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
        console.log (message)
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
functEmployees(1)
module.exports = {
    sum,
    rest,
    multiply,
    divide,
    functEmployees
}