// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

function calSum(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    const evenNumber = i * 2;
    sum += evenNumber;
  }

  return sum;
}

const n = 5;
const sum = calSum(n);

console.log(`Sum of the first ${n} even numbers is: ${sum}`);

  