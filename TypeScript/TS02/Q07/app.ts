// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

function calculateSum(numbers: number[]): number {
  let sum = 0;
  let index = 0;

  while (index < numbers.length) {
    sum += numbers[index];
    index++;
  }

  return sum;
}

const arr: number[] = [1, 2, 3, 4, 5];
const result: number = calculateSum(arr);
console.log(`Sum of the numbers: ${result}`);
