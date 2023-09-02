// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
function removeEvenNumbers(numbers: number[]): number[] {
  const oddNumbers: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddArr: number[] = removeEvenNumbers(arr);

console.log("Original Array:", arr);
console.log("Array with Only Odd Numbers:", oddArr);
