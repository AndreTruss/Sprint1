const arrayFunctions = [];

const countNumber = () => {
    const array = []
    for ( let i = 0; i < 10; i++ ) { 
        array.push (i) 
    }
    return array
};

for ( let j = 0; j < 10; j++ ) { 
    arrayFunctions.push ( countNumber() ) 
};

arrayFunctions.forEach ( element => console.log ( element ) )

