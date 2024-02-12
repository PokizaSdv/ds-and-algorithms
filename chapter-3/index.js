function isLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(isLeapYear(2020));

const isLeapYear1 = (year) => {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }
    return year % 4 === 0;
};
console.log(isLeapYear1(2019));
//------------------------------------------

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log(arraySum([1,2,3,4]))

const arraySum1 = (array) => {
    return array.reduce((acc, curr) => acc + curr, 0)
}

console.log(arraySum1([1,2,3,4]));

//------------------------------------------

//Imagine you have a chessboard and put a single grain of rice on one square. On the second square, you put 2 grains of rice, since that is double the amount of rice on the previous square. On the third square, you put 4 grains. On the fourth square, you put 8 grains, and on the fifth square, you put 16 grains, and so on. The following function calculates which square you’ll need to place a certain number of rice grains. For example, for 16 grains, the function will return 5, since you will place the 16 grains on the fifth square.

function chessBoard(numberOfGrains) {
    let chessBoardSpaces = 1;
    let placedGrains = 1

    while (placedGrains < numberOfGrains) {
        placedGrains *= 2;
        chessBoardSpaces +=1
    }

    return chessBoardSpaces;
}
console.log(chessBoard(16))
//---------------------------------------------

//The following function accepts an array of strings and returns a new array that only contains the strings that start with the character "a".
function selectAString(array) {
    let newArr = []

    for(let i = 0; i < array.length; i ++) {
        if(array[i].startsWith("a")) {
            newArr.push(array[i])
        }
    }
    return newArr;
}
const selectAString1 = (array) => {
    return array.filter((ele) => ele.startsWith("a"))
}

console.log(selectAString(["apple", "banana", "orange", "acorn"]))
console.log(selectAString1(["apple", "banana", "orange", "acorn"]))

//-----------------------------------------------
function median(array) {
    let middle = Math.floor(array.length / 2)
    if(array.length % 2 === 0) {
        return (array[middle - 1] + array[middle]) / 2
    } else {
        return array[middle]
    }
}
console.log(median([1,2,3,4,5,6,7,8]))


// this approach only for integers
const median1 = (array) => {
    let middle = Math.floor(array.length / 2)
    if(array.length % 2 === 0) {
        return (array[middle - 1] + 0.5)
    } else {
        return array[middle]
    }
}
console.log(median1([1,2,3,4,5,6,7,8]))