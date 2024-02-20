//function, that takes an array of numbers and returns the mean average of all its even numbers
function averageSumOfEvenNums(array) {
    let sum = 0.0
    let countOfEvenNums = 0
    for(let num of array) {
        if(num % 2 === 0) {
            sum += num;
            countOfEvenNums +=1
        }
    }
    return sum / countOfEvenNums
}
console.log(averageSumOfEvenNums([1,2,3,4,5,6]))
//----------------------------------------------
function averageSumOfEvenNums2(array) {
    const evenNumbers = array.filter(num => num % 2 === 0);
    const sumOfEvenNumbers = evenNumbers.reduce((acc, num) => acc + num, 0)

    return sumOfEvenNumbers / evenNumbers.length;
}
console.log(averageSumOfEvenNums2([1,2,3,4,5,6]))