// NIVELL 3
// Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. 
// Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.


const instance = jest.createMockFromModule( '../app/team.json' )

describe('exercise Async 1.1 mock del fitxer JSON', () => {
  test('add employee1 id toBe 1, name to equal Linux Torvalds, salary toBe 4000', async () => {

    expect( instance.Employee1.id ).toBe( 1 )
    expect( instance.Employee1.name ).toMatch( 'Linux Torvalds' )
    expect( instance.Employee1.salary ).toBe( 4000 )

  })
  })