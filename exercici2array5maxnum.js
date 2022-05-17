let array1 = [0, 4, 10, 7, 1]
let array2 = [2, 7, 9, ,3 ,6]
let arr3 = []

const maximizedArray = ((arr1, arr2 ) => {

    for (num1 of arr1) {

        for (num2 of arr2) {

            if ( num1 > num2 && arr3.indexOf(num1) == -1 ) arr3.push( num1 )
            if ( num2 > num1 && arr3.indexOf(num2) == -1 ) arr3.push( num2 )
                                       
            }
        }
        arr3.sort( (a,b) => {return b - a} )
        
    console.log(arr3.slice(0,5))
        
})

maximizedArray( array1 , array2)