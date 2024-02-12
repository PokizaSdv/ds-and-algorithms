// linear search is a simply searching algorithm that sequentially checks each element in a list until a target element is found or the list is reached. It is straightforward and easy to implement but may not be the most efficient for large lists. It can be useful for small or unsorted lists

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true; 
        } 
    }
    return false;
}

const array = [2, 4, 6, 10, 12, 13];
const numToFind = 8;

// function linearSearch(arr, target) {
//     return arr.find(element => element === target) !== undefined;
// }

console.log(linearSearch(array, numToFind));

//--------------------------------------------------------------
// binary search is efficient for sorted and big giant lists or arrays. it divides the search space in half with each iteration, making it faster than linear search. 
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return true; 
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }
    return false; 
}

const array2 = [2, 4, 6, 8, 10, 12, 13];
const numToFind2 = 8;

console.log(binarySearch(array2, numToFind2));

