// Write a program that uses a while loop to print the first 10 even numbers.
let num:number = 0;
let printedCount:number = 0;

while (printedCount < 10) {
  if(num % 2 === 0) {
    console.log(num);
    printedCount++;
  }
  num++;
}
