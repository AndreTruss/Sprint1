// function sum, rest, multiply and divide

function operation( value, a, b, c ) {
if ( value == 'sum' ) { return (a + b + c )}
if ( value == 'rest' ) { return a - b - c }
if ( value == 'multiply' ) { return (a * b * c) }
if ( value == 'divide' ) { return a / b }
}

module.exports = operation
