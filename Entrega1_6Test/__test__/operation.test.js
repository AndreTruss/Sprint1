//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { 
  sum, 
  rest, 
  multiply, 
  divide, 
  functEmployees, 
  dobleIn2secFunctionAsync,
  getEmployee,
  getSalary
} = require('../app/operation')

describe('function sum', () => {
  test('adds 1 + 2 + 3 to equal 6', () => {
  expect( sum( 1, 2, 3 ) ).toBe(6)
  })
})

describe('function rest', () => {
test('rests 10 - 2 - 3 to equal 5', () => {
    expect( rest( 10, 2, 3 ) ).toBe(5)
})
})

describe('function multiply', () => {
test('multyplies 10 * 2 * 3 to equal 60', () => {
  expect( multiply( 10, 2, 3 ) ).toBe(60)
})
})

describe('function divide', () => {
test('divides 6 / 2 to equal 3', () => {
    expect( divide( 6, 2 ) ).toBe(3)
})
})

// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

describe('exercise Async 1.1', () => {
test('add id employees 1 to equal Linux Torvalds', async () => {
  
  try {
    await expect( functEmployees(1) ).resolves.toMatch(`Employee: Linux Torvalds, have salary: 4000`)
  } catch (error) {
    await expect( functEmployees(1) ).rejects.toThrow(error)
  }
})
})


// Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

describe('exercise Promises 2.3', () => {
  test('add id employees 1 to equal Linux Torvalds', () => {
    return getEmployee(1).then(value => {
      return getSalary(value).then(data => {
        expect(data).toMatch(`Employee: Linux Torvalds, have salary: 4000`)
    })
  })
  })
})

// Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('exercise Async 2.1', () => {
test('doble 6 is 12', async () => {
  try {

    await expect( dobleIn2secFunctionAsync( 6 ) ).resolves.toMatch(`Doble of number 6 is 12`)
    
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith( expect.any( Function ), 2000)  

  } catch (error) {  
    console.log(error)   
  }
})
})



