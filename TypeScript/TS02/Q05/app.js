"use strict";
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function calculateFactorial(num) {
    if (num < 0) {
        console.log("Please, Enter a positive number!!!");
        return 0;
    }
    else {
        let factorial = 1;
        let i = 1;
        while (i <= num) {
            factorial *= i;
            i++;
        }
        return factorial;
    }
}
const number = 5;
const result = calculateFactorial(number);
console.log(`Factorial of ${number} is ${result}`);
