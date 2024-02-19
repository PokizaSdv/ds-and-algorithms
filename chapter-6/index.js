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