function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true; 
        } else if (arr[i] > target) {
            return false; 
        }
    }
    return false;
}

const array = [2, 4, 6, 8, 10, 12, 13];
const numToFind = 8;

// function linearSearch(arr, target) {
//     return arr.find(element => element === target) !== undefined;
// }

console.log(linearSearch(array, numToFind));

//--------------------------------------------------------------
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

