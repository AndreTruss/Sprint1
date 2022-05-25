const { functEmployees } = require('../app/operation')

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