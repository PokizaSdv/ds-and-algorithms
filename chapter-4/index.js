// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

function bubbleSort(array) {
    let lastIdx = array.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < lastIdx; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
            }
        }
        lastIdx--;
    }
    return array;
}
console.log(bubbleSort([3, 5, 6, 7, 2, 8, 1]));

// Function that returns true, if it has duplicate of elements
//Quadratic Solution O(N^2)
function hasDuplicateValue(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log(hasDuplicateValue([3,5,8]))
// Linear Solution O(N)
function hasDuplicateValue2(array) {
    let existingNumber = [];
    for (let i = 0; i < array.length; i++) {
        if (existingNumber[array[i]] === 1) {
            return true;
        } else {
            existingNumber[array[i]] = 1;
        }
    }
    return false;
}
console.log(hasDuplicateValue2([3, 5, 8, 5]));
//[undefined, undefined, undefined, 1, undefined, 1, undefined, undefined, 1]


//---------------------------------------

// function that finds greatest product of any pair of two numbers within a given array
function greatestProduct(array) {
    let greatestProductSoFar = array[0] * array[1]

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(i !== j && array[i] * array[j] > greatestProductSoFar) {
                greatestProductSoFar = array[i] * array[j]
            }
        }
    }
    return greatestProductSoFar
}
console.log(greatestProduct([1,2,3,5,3,4]))

//function that returns the greatest single number within an array (Quadratic Solution O(N^2))
function greatestNumber(array) {
    for (const i of array) {
        let isGreatest = true
        for( const j of array) {
            if(j > i) {
                isGreatest = false
            }
        }
        if(isGreatest) return i
    }
}
console.log(greatestNumber([1,2,3,4]))
//Linear Solution O(N)
function greatestNumber2(array) {
    let greatest = 0;
    for(let i = 1; i < array.length; i++) {
        if(array[i] > greatest) {
            greatest = array[i]
        }
    }
    return greatest;
}
console.log(greatestNumber2([1,2,3,4]))