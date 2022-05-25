// NIVELL 1
//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { 
  sum, 
  rest, 
  multiply, 
  divide
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
