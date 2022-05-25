// Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.
const { dobleNumberAsync } = require('../app/operation')

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('exercise Async 2.1', () => {
test('doble 6 is 12', async () => {
  try{
    await expect( dobleNumberAsync( 6 ) ).resolves.toMatch(`Doble of number 6 is 12`) 
    
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith( expect.any( Function ), 2000)  
  } catch (error) {
    await expect( dobleNumberAsync( 'a' ) ).rejects.toThrow(error)
  }
  
})
})