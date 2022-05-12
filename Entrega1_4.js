// Nivell4 Exercici1

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

const getEmployee = empId => new Promise( (resolve, reject) => { 
	let worker = employees.find( element => element.id == empId)
	//console.log(worker) 
	worker
	? resolve(worker)
    : reject(new Error('¡Failure!') )
}) 

const getSalary = worker => {
    let index = employees.findIndex( indice => indice == worker)
    const messaggio = `Employee: ${worker.name} have salary: ${salaries[index].salary}`
    return Promise.resolve(messaggio)
} 

async function myFunction(){
    const employee = await getEmployee(2)
    const message = await getSalary(employee)
    console.log(message)
}
myFunction().catch(err => console.log(err.message))