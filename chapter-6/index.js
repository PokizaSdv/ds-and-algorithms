// Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It works by repeatedly taking the next element from the unsorted part of the array and inserting it into its correct j within the sorted part of the array.
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = current;
    }
    return array;
}
console.log(insertionSort([4, 6, 7, 2, 3, 5, 1, 8]));

//function, that takes two array and returns their common values
function intersection(arr1, arr2) {
    let result = [];

    for(let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                result.push(arr1[i])
                break
            }
        }
    }
    return result
}
console.log(intersection([1,3,5,7], [3,6,7,9]))

// function, that checks if an array of numbers contains a pair of two numbers that add up to 10
function twoSum(array) {
    for(let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(i !== j && array[i] + array[j] === 10) {
                return true
            } 
        }
    }
    return false
}
console.log(twoSum([1,2,3,4,5]))
//-----------------------------------------------
function twoSum2(array) {
    const seen = {};
    for (let i = 0; i < array.length; i++) {
        const complement = 10 - array[i];
        if (seen[complement]) {
            return true;
        }
        seen[array[i]] = true;
    }
    return false;
}

console.log(twoSum2([1, 2, 3, 4, 5]));