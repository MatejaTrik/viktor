function provera (number) {
    const array = []
    
    for (i = 0; i < number.length; i++) {
        array.push(number[i])
    }
    console.log(array);
    for (j = 1; j < array.length; j++) {
        if (array[j] > array[j-1]) {
            console.log();
        }
    }
}

provera('359')

// 
// 
// 
// 

function palindrom (word) {
    const array = word.split('')
    const reversedArray = array.reverse()
    if (array.join('') == reversedArray.join('')) {
        console.log('rec je palindrom');
    } else {

        console.log('rec nije palindrom');
    }
   
}

palindrom ('anavolimilovana')

// 
// 
// 
// 

function brojanjeCifara (number) {
    const array = number.split('')
    console.log(array.length);
}

brojanjeCifara('123456789')

// 
// 
// 

// function sabiranjeCifara (broj, n) {
//     const array = broj.split('')

//     for (i = 0; i < )
// }

// 
// 
// 

function brisanjeReda (num1, num2, num3, num4)   {
    const array1 = num1.split('')
    const array2 = num2.split('')
    const array3 = num3.split('')
    const array4 = num4.split('')

    
    console.log(array1, array2, array3, array4);
}

brisanjeReda('123', '456', '789', '101')