// 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let num:number = 10;
let myname:string = "Ali";
let sports: string[] = ["Cricket", "Football"];

console.log('Is num == 10, Predict True');
console.log(num == 10);
console.log('Is num < 8, Predict False');
console.log(num < 8);
console.log('Is num >= 10, Predict True');
console.log(num >= 10);
console.log('Is num != 10, Predict False');
console.log(num != 10);
console.log('Is name == Ali, Predict True');
console.log(myname == 'Ali');
console.log('Is name == ali, Predict False');
console.log(myname == 'ali');
console.log('Is sports include Football, Predict True');
console.log(sports.includes("Football"));
console.log('Is sports include Tennis, Predict False');
console.log(sports.includes("Tennis"));
console.log('Is num == 10 AND myname == "Ali, Predict True');
console.log(num == 10 && myname == "Ali");
console.log('Is num == 15 AND myname == "Ali, Predict False');
console.log(num == 15 && myname == "Ali");
console.log('Is num == 15 OR myname == "Ali, Predict True');
console.log(num == 15 || myname == "Ali");
