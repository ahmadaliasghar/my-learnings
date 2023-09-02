// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function calculateCircleArea(radius: number): number {
  const pi = 3.1416;
  const area = pi * radius * radius;
  return area;
}

const radius:number = 5;
const area = calculateCircleArea(radius);
console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
