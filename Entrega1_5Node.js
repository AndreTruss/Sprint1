// Nivell1 Exercici1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs/promises')

async function writeText(text) {
  try {
    await fs.writeFile('./text.txt', text)
  } catch (err) {
    console.log(err)
  }
}


// Nivell1 Exercici2
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

async function readText() {
  try {
    const data = await fs.readFile('./text.txt', { encoding: 'utf8' })
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}


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


// Nivell2 Exercici2
// Crea una funció que llisti per la consola el contingut 
// del directori d'usuari de l'ordinador utilizant Node Child Processes.


const { spawn } = require('child_process')
const os = require('os')

const userDirectory = os.homedir()
const valueOS = os.platform()

if ( valueOS == 'win32' ) {

  const dir = spawn('dir', [ userDirectory ], { shell: true})
  
/*   dir.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  dir.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  dir.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  }) */
}
else {

  const ls = spawn('ls', [ userDirectory ])

/*   ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`) 
  }) */
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

async function encryptFiles() {
  try {

    const text = await fs.readFile('./text.txt', { encoding: 'utf8' })

    const cipher = createCipheriv(algorithm, key, iv)
    const cipher64 = createCipheriv(algorithm, key, iv)

    let encryptedHex = cipher.update(text, 'utf8', 'hex')
    encryptedHex += cipher.final('hex')

    let encryptedBase64 = cipher64.update(text, 'utf8', 'base64')
    encryptedBase64 += cipher64.final('base64')


    await fs.writeFile('./textHex.txt', encryptedHex)
    await fs.writeFile('./textBase64.txt', encryptedBase64)

  } catch (err) {
    console.log(err);
  }
}


// Crea una funció que guardi els fitxers del punt anterior, 
// ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

async function deleteFiles( text1 ) {
  try {
    await fs.unlink( text1 )
    console.log('File correctly delete')
  } catch (err) {
    console.log(err);
  }
}


// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
// tornant a generar una còpia de l'inicial.
// Inclou un README amb instruccions per a l'execució de cada part.

async function decryptFiles() {
  try {

    const text1 = await fs.readFile('./textHex.txt', { encoding: 'utf8' })
    const text2 = await fs.readFile('./textBase64.txt', { encoding: 'utf8' })

    const decipher = createDecipheriv(algorithm, key, iv)
    const decipher64 = createDecipheriv(algorithm, key, iv)

    let decryptedHex = decipher.update(text1, 'hex', 'utf8')
    decryptedHex += decipher.final('utf8')

    let decryptedBase64 = decipher64.update(text2, 'base64', 'utf8')
    decryptedBase64 += decipher64.final('utf8')


    await fs.writeFile('./textHexdecry.txt', decryptedHex)
    await fs.writeFile('./textBase64decry.txt', decryptedBase64)

  } catch (err) {
    console.log(err);
  }
}

// de la funciones para desbloquear me he dejado lo de la lista del directory user en su sitio

//writeText('If you read this, then function writeText and readText works')

// readText()

/* do_gzip('./text.txt', './text.txt.gz')
.catch((err) => {
  console.error('An error occurred:', err);
  process.exitCode = 1
}) */

//recursiveFunction( 1000 )

//encryptFiles()

//deleteFiles( './text.txt' )

//decryptFiles()
