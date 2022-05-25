// NIVELL 2
// Crea un mock que comprovi les crides al constructor de la classe Persona 
// i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2


const Person = require('../app/Persona')
jest.mock('../app/Persona')

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Person.mockClear();
});

describe('exercise Classes 2.2', () => {
test('We should be able to call new() on Person', () => {
  
  const newPerson = new Person();
  // Ensure constructor created the object:
  expect(newPerson).toBeTruthy();
})
})

describe('exercise Classes 2.2', () => {
    test('We can check if we called the class constructor', () => {
  
      const newPerson = new Person()
    
      newPerson.dirNom();
      expect( Person ).toHaveBeenCalledTimes(1)
  })
  })
  
  describe('exercise Classes 2.2', () => {
  test('We can check if we called a method on the class instance', () => {
  
    expect(Person).not.toHaveBeenCalled()
  
    const newPerson = new Person()
  
    expect( Person ).toHaveBeenCalledTimes(1)
  
    newPerson.dirNom('Andrea')
    
    const mockPersonInstance = Person.mock.instances[0];
    const mockPerson = mockPersonInstance.dirNom;
   
    expect(mockPerson).toHaveBeenCalledWith('Andrea');
    expect(mockPerson).toHaveBeenCalledTimes(1);
  })
  })