// Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.

const { createObj } = require('../app/operation')

describe('exercise Classes 3.1', () => {
    test('Verify object message equal to Message is: Everything you want', () => {
  
      createObj.prototype.message = 'viva'
      expect( createObj.prototype.info() ).toMatch('Message is: viva')
    })
    })