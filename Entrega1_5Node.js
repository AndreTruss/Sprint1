/* // Nivell1 Exercici1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs/promises');

async function writeText(text) {
  try {
    await fs.writeFile('../test.txt', text);
  } catch (err) {
    console.log(err);
  }
}
writeText('If you read this, then exercise1 works');


// Nivell1 Exercici2
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

async function readText() {
  try {
    const data = await fs.readFile('../test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
readText();


// Nivell1 Exercici3
// Crea una funció que comprimeixi el fitxer del nivell 1.

const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const { promisify } = require('util');
const pipe = promisify(pipeline);

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}

do_gzip('../test.txt', '../test.txt.gz')
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }); */


// Nivell2 Exercici1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

let boolean = true

function sleep( ms ) {
    return new Promise( ( resolve, reject ) => {
        boolean 
        ? setInterval( resolve, ms )
        : reject( new Error( 'Nothing' ) )
    })
}

async function recursiveFunction( ms ) {
    try {
        while ( true ) {
            setTimeout( () => { boolean = false }, 5000 )
            console.log('I want to say ...')
            await sleep( ms )
        } 
    } catch ( err ) {
        console.log( err.message )
    }
}
recursiveFunction( 1000 )