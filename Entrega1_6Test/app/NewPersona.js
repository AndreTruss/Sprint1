const NewPerson = require('../app/Persona')

class NewPersona {
  constructor() {
    this.newPerson = new NewPerson();
  }

  dirNomCool() {
    const coolName = 'My name is Andrea';
    this.newPerson.dirNom(coolName);
  }
}

module.exports = { NewPersona}