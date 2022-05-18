//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { sum, rest, multiply, divide } = require('../app/operation')

test('adds 1 + 2 + 3 to equal 6', () => {
  expect( sum( 1, 2, 3 ) ).toBe(6)
})

test('rests 10 - 2 - 3 to equal 5', () => {
    expect( rest( 10, 2, 3 ) ).toBe(5)
})

test('multyplies 10 * 2 * 3 to equal 60', () => {
  expect( multiply( 10, 2, 3 ) ).toBe(60)
})

test('divides 6 / 2 to equal 3', () => {
    expect( divide( 6, 2 ) ).toBe(3)
})


const { functEmployees, dobleIn2secFunctionAsync, sumDobleFunctionAsync } = require('../../Entrega1_4Async')

it('add id employees 1 to equal Linux Torvalds', async () => {
  
  try {
    expect.assertions(1)
    await expect(functEmployees(1)).toEqual('Employee: Linux Torvalds, have salary: 4000')
  } catch (error) {
    console.log(error);
  }
})

it('doble 6 is 12', async () => {
  
  try {
    expect.assertions(1)
    await expect(dobleIn2secFunctionAsync(6)).toEqual('Doble of number 6 is 12')
  } catch (error) {
    console.log(error);
  }
})

it('sum of doble 2, 3, 6 is 22', async () => {
  
  try {
    expect.assertions(1)
    await expect(sumDobleFunctionAsync(2, 3, 6)).toEqual('Sum of doble of numbers 2, 3, 6 is 22')
  } catch (error) {
    console.log(error);
  }
})

const { getEmployee, getSalary } = require( '../../Entrega1_3Promise')