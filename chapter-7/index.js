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
    const Cs = Fs.map((F) => (F - 32) / 1.8);
    const sum = Cs.reduce((acc, C) => acc + C, 0);
    return sum / Cs.length;
}
console.log(averageCelsius2([100, 98, 32]));

//function that accepts an array of newly produced clothing items and creates text for every possible label
function markInventory(clothingItems) {
    let clothingOptions = [];
    for (let item of clothingItems) {
        for (let size = 1; size < 6; size++) {
            clothingOptions.push(item + " Size: " + size);
        }
    }
    return clothingOptions;
}
console.log(markInventory(["Purple Shirt", "Green Shirt"]));
//-------------------------------------
function markInventory2(clothingItems) {
    return clothingItems.flatMap((item) => {
        return Array.from({ length: 5 }, (_, i) => item + " Size: " + (i + 1));
    });
}
console.log(markInventory2(["Purple Shirt", "Green Shirt"]));
//In this version, flatMap is used to both iterate over each clothing item and generate an array of strings for each item. Within the flatMap callback function, Array.from is used to create an array of length 5 (for sizes 1 through 5), and each element of this array is constructed as a string representing the clothing option. The i + 1 part ensures that sizes start from 1 instead of 0.

//function that accepts an array of arrays, where the inner contain 1s and 0s. and returns how many 1s there?
function countOnes(array) {
    let counter = 0;
    for (let subArr of array) {
        for (let num of subArr) {
            if (num === 1) {
                counter += 1;
            }
        }
    }
    return counter;
}
console.log(
    countOnes([
        [1, 0, 1, 0, 1, 0],
        [1, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0]
    ])
);
//----------------------------------
function countOnes2(array) {
    return array
        .flatMap((subArr) => subArr)
        .reduce((counter, num) => counter + num, 0);
}
console.log(
    countOnes2([
        [1, 0, 1, 0, 1, 0],
        [1, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0]
    ])
);
//------------------------------
function countOnes3(array) {
    return array
        .flatMap((subArr) => subArr) // Flatten the array of arrays into a single array
        .reduce((counter, num) => counter + (num === 1 ? 1 : 0), 0); // Increment the counter only if num is 1
}
console.log(
    countOnes3([
        [1, 0, 1, 0, 1, 0],
        [1, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0]
    ])
);
