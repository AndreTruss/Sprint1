// Nivell1 Exercici1

let myPromise = new Promise((resolve, reject) => {
	setTimeout(function() {
		resolve('¡Éxito!');
	}, 250);
	setTimeout(function() {
		reject('¡Fail!');
	}, 280);
});
myPromise
	.then((value) => {
		console.log('¡Sí! ' + value);
	})
	.catch((reason) => {
		console.error('¡No! ' + reason);
	});

// Nivell1 Exercici2

let callback = (element) => {
    element === 1 ? console.log('¡Sí! ¡Éxito!') : console.error('¡No! ¡Fail!')
}

let myFunction = (parameter) => { callback(parameter) }

myFunction(1)
myFunction(0)
    