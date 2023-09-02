"use strict";
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegativeNumbers(numbers) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] < 0) {
            numbers.splice(i, 1);
        }
    }
    return numbers;
}
const numbersArray = [1, -2, 3, -4, 5, -6];
console.log("Array before removing negative numbers:", numbersArray);
removeNegativeNumbers(numbersArray);
console.log("Array after removing negative numbers:", numbersArray);
