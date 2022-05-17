const sum = require('../app/index.js')
const rest = require('../app/index.js')
const multiply = require('../app/index.js')
const divide = require('../app/index.js')

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5)
})

test('rests 10 - 2 to equal 8', () => {
    expect(rest(10, 2)).toBe(8)
})

test('multyplies 10 * 2 to equal 20', () => {
  expect(multiply(10, 2)).toBe(20)
})

test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3)
})