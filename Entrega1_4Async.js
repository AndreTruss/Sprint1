// Nivell1 Exercici1
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
        console.log(message)
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
//functEmployees(2)


// Nivell1 Exercici2
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
// que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

const resolveIn2Seconds = boolean => { 
	return new Promise( (resolve, reject) => {
        boolean
		    ? setTimeout( () => resolve('¡Right! 2 seconds'), 2000)
            : reject( new Error('¡Fail ecercici 1.2!') )
	}) 
}

async function resolveIn2SecFunctionAsync(value){
    try {
        const message = await resolveIn2Seconds(value)
        console.log(message)
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
//resolveIn2SecFunctionAsync( true )

// Nivell2 Exercici1
// Crea una funció que retorni el doble del número que se li passa 
// com a paràmetre després de 2 segons.

// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles 
// usant la funció anterior.

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
        setTimeout( () => console.log(`Doble of number ${numero} is ${message}`), 2000 )
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
//dobleIn2secFunctionAsync( 6 )

async function sumDobleFunctionAsync( num1, num2, num3 ){
    try {
        let result1 = await dobleNumber( num1 )
        let result2 = await dobleNumber( num2 )
        let result3 = await dobleNumber( num3 )
        
        const sumNumbers = result1 + result2 + result3

        console.log(`Sum of doble of numbers ${num1}, ${num2}, ${num3} is ${sumNumbers}`)
    } catch (error) {
        console.log(`¡No! ${error.message}`) 
    }
}
//sumDobleFunctionAsync( 2, 3, 6 )

module.exports = {
    functEmployees,
    dobleIn2secFunctionAsync,
    sumDobleFunctionAsync
}

// Nivell3 Exercici1
// Força i captura tants errors com puguis dels nivells 1 i 2.

/* functEmployees( 5 )
resolveIn2SecFunctionAsync( false )
dobleIn2secFunctionAsync( 'c' )
dobleIn2secFunctionAsync( NaN )
sumDobleFunctionAsync( 2, 3 )
sumDobleFunctionAsync( undefined, 0, 0 ) */
  
