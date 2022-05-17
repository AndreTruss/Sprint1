// Nivell1 Exercici1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs/promises');

async function writeText(text) {
  try {
    await fs.writeFile('../test.txt', text);
  } catch (err) {
    console.log(err);
  }
}
writeText('If you read this, then exercise 1.1 works');


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

const { createGzip } = require('zlib')
const { pipeline } = require('stream')
const { createReadStream, createWriteStream } = require('fs')
const { promisify } = require('util')
const pipe = promisify(pipeline)

async function do_gzip(input, output) {
  const gzip = createGzip()
  const source = createReadStream(input)
  const destination = createWriteStream(output)
  await pipe(source, gzip, destination)
}

/* do_gzip('../test.txt', '../test.txt.gz')
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1
  }) */


// Nivell2 Exercici1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

const { setInterval, setTimeout } = require( 'timers')
let boolean = true

const sleep = time => {
    
  const interval = setInterval( () => {

    if (boolean === false) clearInterval(interval)
    console.log('Hello ...') 

  }, time )
}

async function recursiveFunction( msec ) {
  try {
    
    setTimeout( () => { boolean = false }, 6000 )          
    sleep( msec )
            
  } catch ( err ) {
    console.log( err.message )
  }
}
recursiveFunction( 1000 )


// Nivell2 Exercici2
// Crea una funció que llisti per la consola el contingut 
// del directori d'usuari de l'ordinador utilizant Node Child Processes.


const { spawn } = require('child_process')
const os = require('os')

const userDirectory = os.homedir()
const valueOS = os.platform()

if ( valueOS == 'win32' ) {

  const dir = spawn('dir', [ userDirectory ])

  dir.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  dir.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  dir.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  })
}
else {
  const ls = spawn('ls', [ userDirectory ])

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  })
}


// Nivell3 Exercici1
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
// a partir del fitxer del nivell 1.


const { createCipheriv, scryptSync, createDecipheriv } = require('crypto')
const { Buffer } = require( 'buffer')

const algorithm = 'aes-192-cbc'
const password = 'Password used to generate key';

const key = scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0)

const cipher = createCipheriv(algorithm, key, iv)
const cipher64 = createCipheriv(algorithm, key, iv)

let encryptedHex = cipher.update('If you read this, then exercise 1.1 works', 'utf8', 'hex')
encryptedHex += cipher.final('hex')

let encryptedBase64 = cipher64.update('If you read this, then exercise 1.1 works', 'utf8', 'base64')
encryptedBase64 += cipher64.final('base64')

//let encryptedBase64 = Buffer.from('../test.txt').toString('base64') 
//console.log(encryptedHex, encryptedBase64)


async function encryptFiles(text1, text2) {
  try {
    await fs.writeFile('../testHex.txt', text1)
    await fs.writeFile('../testBase64.txt', text2)
  } catch (err) {
    console.log(err);
  }
}
encryptFiles( encryptedHex, encryptedBase64 )


// Crea una funció que guardi els fitxers del punt anterior, 
// ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

async function deleteFiles( text1 ) {
  try {
    await fs.rm( text1 )
    console.log('File correctly delete')
  } catch (err) {
    console.log(err);
  }
}
// deleteFiles( '../test.txt' )


// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
// tornant a generar una còpia de l'inicial.
// Inclou un README amb instruccions per a l'execució de cada part.
const decipher = createDecipheriv(algorithm, key, iv)
const decipher64 = createDecipheriv(algorithm, key, iv)

let decryptedHex = decipher.update(encryptedHex, 'hex', 'utf8')
decryptedHex += decipher.final('utf8')

let decryptedBase64 = decipher64.update(encryptedBase64, 'base64', 'utf8')
decryptedBase64 += decipher64.final('utf8')
//let encryptedBase64 = Buffer.from('../test.txt').toString('base64') 
//console.log(decryptedHex, decryptedBase64)

async function decryptFiles(text1, text2) {
  try {
    await fs.writeFile('../dectestHex.txt', text1)
    await fs.writeFile('../dectestBase64.txt', text2)
  } catch (err) {
    console.log(err);
  }
}
decryptFiles( decryptedHex, decryptedBase64 )

 