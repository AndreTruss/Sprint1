// exercise Classes Nivell2 Exercici2

module.exports = class Persona {
    
    constructor( nom ) {
        this.name = nom
    }

    dirNom () {
        return `My name is ${this.name}` 
    }
}

