const operation = require('../app/index.js')

test('adds 1 + 2 + 3 to equal 6', () => {
  expect( operation('sum', 1, 2, 3) ).toBe(6)
})

test('rests 10 - 2 - 3 to equal 5', () => {
    expect( operation('rest', 10, 2, 3) ).toBe(5)
})

test('multyplies 10 * 2 * 3 to equal 60', () => {
  expect( operation('multiply', 10, 2, 3) ).toBe(60)
})

test('divides 6 / 2 to equal 3', () => {
    expect( operation('divide', 6, 2) ).toBe(3)
})