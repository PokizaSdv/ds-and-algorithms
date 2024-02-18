//Selection sort is a simple comparison-based sorting algorithm. It divides the input array into two parts: a sorted subarray and an unsorted subarray. Initially, the sorted subarray is empty, and the unsorted subarray contains all elements of the input array.
//-The algorithm iterates through the unsorted subarray to find the minimum element.
//-It compares each element with the current minimum element found so far.
//-If a smaller element is found, it updates the minimum element.

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowestNumIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[lowestNumIdx]) {
                lowestNumIdx = j
            }
        }
        if(lowestNumIdx !== i) {
            let temp = array[i];
            array[i] = array[lowestNumIdx];
            array[lowestNumIdx] = temp;
        }
    }
    return array
}
console.log(selectionSort([3,8,7,2,9,4,5,1]))


//function, that prints only even numbers that less than given number;
function printEvens1(upperLimit) {
    let number = 2;
    while (number <= upperLimit) {
        if(number % 2 === 0) {
            console.log(number)
        }
        number +=1
    }
} 
printEvens1(15)
//----------------------
function printEvens2(upperLimit) {
    let number = 2;
    while (number <= upperLimit) {
        console.log(number)
        number +=2
    }
    
}
printEvens2(9)


//Function that returns the sum of all numbers of an array after the numbers have been doubled

function doubleThenSum(array) {
    let doubledArray = []
    for(let i = 0; i < array.length; i++) {
        doubledArray.push(array[i] * 2)
    }
    let sum = 0;
    for(const num of doubledArray) {
        sum += num
    }
    return sum;
}
console.log(doubleThenSum([2,4,6]))

function doubleThenSum2(array) {
    return array.map(num => num * 2).reduce((acc, curr) => acc + curr, 0)
}
console.log(doubleThenSum2([2,4,6]))

//function which accepts an array of strings and prints each string in multiple cases
function multipleCases(array) {
    for(const str of array) {
        console.log(str.toUpperCase())
        console.log(str.toLowerCase())
        console.log(str[0].toUpperCase() + str.slice(1))
    }
}
multipleCases(["apple", "banana", "lemon"])

//function, that returns sum of each number in even index and all numbers in the array
function sumOfEvenIdxNumAndAll(array) {
    for(let i = 0; i < array.length; i++) {
        if(i % 2 === 0) {
            let sum = array[i];
            for(let j = 0; j < array.length; j++){
                sum += array[j]
            }
            console.log(`Sum of ${array[i]} and all number in the array: ${sum}`)
        }
    }
}
sumOfEvenIdxNumAndAll([1,2,3,4,5,6])

function sumOfEvenIdxNumAndAll2(array) {
    array.forEach((number, index) => {
        if(index % 2 === 0) {
            const sum = array.reduce((acc, cur) => acc + cur, number)
            console.log(`Sum of ${number} and all numbers in the array: ${sum}`)
        }
    })
}
sumOfEvenIdxNumAndAll2([1,2,3,4,5,6])