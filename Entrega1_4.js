// Nivell4 Exercici1
// Crea una funció asíncrona que rebi un id d'empleat 
// i imprimeixi per pantalla el nom de l'empleat i el seu salari, 
// usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

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

const getSalary = employee => 
	new Promise( (resolve, reject) => { 
		let wage = salaries.find( element => element.id == employee.id)
	 
		wage  
			? resolve(`Employee: ${employee.name}, have salary: ${wage.salary}`)
			: reject(new Error('¡Failure!') )
	}
) 

async function myFunction(empId){
    try {
        const employee = await getEmployee(empId)
        const message = await getSalary(employee)
        console.log(message)
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
myFunction(2)


// Nivell1 Exercici2
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
// que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

let myPromise = () => { 
	return new Promise( (resolve, reject) => {
		setTimeout( () => resolve('¡Right! 2 seconds'), 2000)
	}) 
}

async function newFunction(){
    try {
        const message = await myPromise()
        console.log(message)
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
newFunction().catch( error => console.log(`¡No! ${error.message}`) )

// Nivell2 Exercici1
// Crea una funció que retorni el doble del número que se li passa 
// com a paràmetre després de 2 segons.

// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles 
// usant la funció anterior.

const dobleNumber = number => number * 2

const late2seconds = num => { 
	return new Promise( (resolve, reject) => {
        setTimeout( resolve( dobleNumber( num ) ), 2000 ) 
    }) 
}
async function dobleFunction( numero ){
    try {
        const message = await late2seconds( numero )
        console.log(message)
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
dobleFunction( 6 )

const sumDoble3Number = (number1, number2, number3) => {
    const sumNumbers = dobleNumber(number1) + dobleNumber(number2) + dobleNumber(number3)
    return Promise.resolve(sumNumbers)
}
async function sumDobleFunction( num1, num2, num3 ){
    try {
        const message = await sumDoble3Number( num1, num2, num3 )
        console.log(message)
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
sumDobleFunction( 2, 3, 6 )

// Nivell3 Exercici1
// Força i captura tants errors com puguis dels nivells 1 i 2.

myFunction(5)
  
