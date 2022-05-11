// Nivell1 Exercici1

let myPromise = new Promise( (resolve, reject) => {
	setTimeout(function() {
		resolve('¡Success!');
	}, 250);
	setTimeout(function() {
		reject('¡Fail!');
	}, 280);
}) 

myPromise 
	.then((value) => {
		console.log('¡Yes! ' + value);
	})
	.catch((reason) => {
		console.error('¡No! ' + reason);
	})


// Nivell1 Exercici2

let callback = (element) => {
    element > 1 ? console.log('¡Success!') : console.error('¡Fail!')
}

let myFunction = (parameter) => { callback(parameter) }

myFunction(1)
myFunction(2)
    
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

const getEmployees = new Promise( (resolve, reject) => {
		employees.find( worker => worker.id ? resolve('¡Success!') : reject('¡Fail!'))
	} )

getEmployees
	.then((value) => {
		console.log('¡Yes! ' + value);
	})
	.catch((reason) => {
		console.error('¡No! ' + reason);
	});