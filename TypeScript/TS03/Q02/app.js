"use strict";
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
function evenNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers in the array:");
evenNumbers(numbersArray);
