// Write a program that uses a function to find the largest element in an array of numbers.

function findMax(numbers: number[]): number {

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

const arr: number[] = [10, 5, 20, 8, 15];
const max: number = findMax(arr);

console.log("Array of Numbers:", arr);
console.log("Largest Element:", max);
