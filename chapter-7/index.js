//function, that takes an array of numbers and returns the mean average of all its even numbers
function averageSumOfEvenNums(array) {
    let sum = 0.0;
    let countOfEvenNums = 0;
    for (let num of array) {
        if (num % 2 === 0) {
            sum += num;
            countOfEvenNums += 1;
        }
    }
    return sum / countOfEvenNums;
}
console.log(averageSumOfEvenNums([1, 2, 3, 4, 5, 6]));
//----------------------------------------------
function averageSumOfEvenNums2(array) {
    const evenNumbers = array.filter((num) => num % 2 === 0);
    const sumOfEvenNumbers = evenNumbers.reduce((acc, num) => acc + num, 0);

    return sumOfEvenNumbers / evenNumbers.length;
}
console.log(averageSumOfEvenNums2([1, 2, 3, 4, 5, 6]));

//function that returns every combination of two-character strings built from an array of single charactrs.
//["a", "b", "c", "d"] => ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

function wordBuilder(array) {
    let collection = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                collection.push(array[i] + array[j]);
            }
        }
    }
    return collection;
}
console.log(wordBuilder(["a", "b", "c", "d"]));
//--------------------------------------------------
function wordBuilder2(array) {
    return array.flatMap((char1, index1) =>
        array.map((char2, index2) => (index1 !== index2 ? char1 + char2 : []))
    );
}
console.log(wordBuilder(["a", "b", "c", "d"]));
// The flatMap() method in JavaScript is used to both map and flatten arrays. It first applies a mapping function to each element of the array and then flattens the result into a new array. Essentially, it's a combination of map() and flat() methods.

// Here's how it works:

// It applies a mapping function to each element of the array.
// The mapping function can return either a single value or an array of values.
// flatMap() then flattens the result into a new array. If the mapping function returns an array, flatMap() concatenates those arrays into the new array it returns.
const array = [1, 2, 3];
const mappedArray = array.flatMap((x) => [x, x * 2]);

console.log(mappedArray); // Output: [1, 2, 2, 4, 3, 6]
// In this example, the mapping function doubles each element of the original array and returns an array with both the original element and its doubled value. flatMap() then flattens this result into a single array. If you used map() instead of flatMap(), you'd get an array of arrays and would need to call flat() separately to flatten it.

// Function that converts all the readings from Fahrenheit to Celcius. Then it calculates  the mean average of all Celsius
function averageCelsius(valuesInFahrenheit) {
    let valuesInCelsius = [];
    for (let i = 0; i < valuesInFahrenheit.length; i++) {
        const valueInCelsius = (valuesInFahrenheit[i] - 32) / 1.8;
        valuesInCelsius.push(valueInCelsius);
    }
    let sum = 0;
    for (let c of valuesInCelsius) {
        sum += c;
    }
    return sum / valuesInCelsius.length;
}
console.log(averageCelsius([100, 98, 32]));
//---------------------------------------------
function averageCelsius2(Fs) {
    const Cs = Fs.map((F) => (F - 32) / 1.8)
    const sum = Cs.reduce((acc, C) => acc + C, 0)
    return sum / Cs.length;
}
console.log(averageCelsius2([100, 98, 32]))