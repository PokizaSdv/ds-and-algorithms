function searchNotInArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return false;
        }
    }
    return true;
}

const array = [1, 2, 3, 4, 5];
const target = 6;
console.log(searchNotInArray(array, target));

//------------------------------------------------
function insertAtBeginning(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }

    arr[0] = value;
    return arr;
}
let array2 = [2, 3, 4, 5];
const newValue = 1;
console.log(insertAtBeginning(array2, newValue)); 

// function insertAtBeginning(arr, value) {
//     arr.unshift(value);
//     return arr;
// }


//---------------------
function insertAtEnd(arr, value) {
    arr.length++;
    arr[arr.length - 1] = value;
    return arr;
}
let array3 = [1, 2, 3, 4];
const lastValue = 5;
console.log(insertAtEnd(array3, lastValue));

// function insertAtEnd(arr, value) {
//     arr.push(value);
//     return arr;
// }

//----------------------------------------
function deleteAtBeginning(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    return arr;
}

// function deleteAtBeginning(arr) {
//     arr.shift();
//     return arr;
// }

let array4= [1, 2, 3, 4, 5];
console.log(deleteAtBeginning(array4));

//--------------------------------------
function deleteAtEnd(arr) {
    arr.length--;
    return arr;
}

let array5 = [1, 2, 3, 4, 5];
console.log(deleteAtEnd(array5))

// function deleteAtEnd(arr) {
//     arr.pop();
//     return arr;
// }

