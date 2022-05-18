//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { sum, rest, multiply, divide, functEmployees } = require('../app/operation.js')

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



/* test('add id employees 1 to equal Linux Torvalds', async () => {

  return expect(functEmployees(1)).resolves.toBe('Employee: Linux Torvalds, have salary: 4000');
}); */

/* test('el fecth falla con un error', async () => {
  await expect(functEmployees(5)).rejects.toMatch('error');
}); */
test('add id employees 1 to equal Linux Torvalds', async () => {
  
  try {
    await expect(functEmployees(1)).toBe('Employee: Linux Torvalds, have salary: 4000')
  } catch (e) {
    console.log(e);
  }
});