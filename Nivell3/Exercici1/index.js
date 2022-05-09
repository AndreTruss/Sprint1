const arrayFunctions = []

const countNumber = () => { for ( let i = 0; i < 10; i++ ) console.log( i ) }
    
for ( let i = 0; i < 10; i++ ) arrayFunctions.push( countNumber ) 

for (let funct of arrayFunctions) funct()  