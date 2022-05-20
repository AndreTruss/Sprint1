// NIVELL 1
//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { 
  sum, 
  rest, 
  multiply, 
  divide, 
  functEmployees, 
  dobleIn2secFunctionAsync,
  getEmployee,
  getSalary,
  createObj
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


// Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

describe('exercise Promises 2.3', () => {
  test('add id employees 1 to equal Linux Torvalds', () => {
    return getEmployee(1).then(Person => {
      return getSalary(Person).then(data => {
        expect(data).toMatch(`Employee: Linux Torvalds, have salary: 4000`)
    })
  })
  })
})

// Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('exercise Async 2.1', () => {
test('doble 6 is 12', async () => {
  try {

    await expect( dobleIn2secFunctionAsync( 6 ) ).resolves.toMatch(`Doble of number 6 is 12`)
    
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith( expect.any( Function ), 2000)  

  } catch (error) {  
    return (error)   
  }
})
})



// NIVELL 2
// Crea un mock que comprovi les crides al constructor de la classe Persona 
// i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2

/* class Persona {
  constructor( nom ) {
      this.name = nom
  }
  dirNom () {
      return `My name is ${this.name}` 
  }
} */

//const {Persona} = require( '../app/Persona')
//const NewPersona = require( '../app/NewPersona')

/* jest.mock('../app/Persona', () => {
  // Works and lets you check for constructor calls:
  return jest.fn().mockImplementation(() => {
    return {dirNom: () => {}};
  });
})  */


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

//const personaMock = jest.spyOn(Persona, 'dirNom')

describe('exercise Classes 2.2', () => {
  test('We can check if we called the class constructor', () => {
    const newPerson = new Person()
  
  //const coolName = 'My name is Andrea';
  newPerson.dirNom();
  expect( Person ).toHaveBeenCalledTimes(1)
})
})

describe('exercise Classes 2.2', () => {
test('We can check if we called a method on the class instance', () => {
  expect(Person).not.toHaveBeenCalled()

  const newPerson = new Person()

  expect( Person ).toHaveBeenCalledTimes(1)

  const coolName = 'Andrea';
  newPerson.dirNom('Andrea')
  //expect( personaMock ).toHaveBeenCalled()
  //expect( personaMock ).toMatch('My name is Andrea')
  // mock.instances is available with automatic mocks:
  const mockPersonInstance = Person.mock.instances[0];
  const mockPerson = mockPersonInstance.dirNom;
  //expect(mockPerson.mock.calls[0][0]).toEqual(coolName);
  // Equivalent to above check:
  expect(mockPerson).toHaveBeenCalledWith('Andrea');
  expect(mockPerson).toHaveBeenCalledTimes(1);
})
})


// Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.

describe('exercise Classes 3.1', () => {
  test('Verify object message equal to Message is: Everything you want', () => {
    const object1 = new createObj('Everything you want')
    expect( object1.info() ).toMatch('Message is: Everything you want')
  })
  })

// NIVELL 3
// Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. 
// Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.


// const Data = require('../app/team.json')
// jest.mock('../app/team.json')

import myJson from '../app/team.json' assert {type: 'json'};

// 👇️ {
//   name: 'Alice',
//   country: 'Austria',
//   tasks: [ 'develop', 'design', 'test' ],
//   age: 30
// }
console.log(myJson.person);

console.log(myJson.person.name); // 👉️ "Alice"
console.log(myJson.person.country); // 👉️ "Austria"



describe('exercise Async 1.1 mock del fitxer JSON', () => {
  test('add id employees 1 to equal Linux Torvalds salary 4000', async () => {
    
    //const mockInstance = Data.mock.instances[0]
    //const mockEmployeeId = jest.spyOn(Data, 'id')
    //const mockEmployeeName = mockInstance.name
    //const mockEmployeeSalary = mockInstance.salary

    //expect( mockInstance).toBe( 1 )
    //expect( mockEmployeeName ).toHaveBeenCalledWith( 'Linux Torvalds' )
    //expect( mockEmployeeSalary ).toBe( 4000 )

  })
  })