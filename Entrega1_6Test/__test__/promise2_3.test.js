const { getEmployee, getSalary } = require('../app/operation')

  // Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

describe('exercise Promises 2.3', () => {
    test('add id employees 1 to equal Linux Torvalds', () => {
       return getEmployee(1).then(employee => {
         return getSalary(employee).then(wage => {
            const data = `Employee: ${employee.name}, have salary: ${wage.salary}`
            expect(data).toMatch(`Employee: Linux Torvalds, have salary: 4000`)
      })
    })
    })
  })