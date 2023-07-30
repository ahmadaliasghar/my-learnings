"use strict";
// 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// 19 (1) 
let guests = ["Ali", "Einstein", "Usman"];
let guestNotCome = guests.splice(2, 1, "Akbar");
let count = 0;
for (let i = 0; i < guests.length; i++) {
    count += 1;
}
console.log(`Total Guests in Question 14 are: ${count}`);
// 19 (2)
let count2 = 0;
for (let i = 0; i < guests.length; i++) {
    count2 += 1;
}
console.log(`Total Guests in Question 15 are: ${count2}`);
//19 (3)
guests.unshift("Ahsan");
guests.splice(2, 0, "Faran");
guests.push("Zeeshan");
let count3 = 0;
for (let i = 0; i < guests.length; i++) {
    count3 += 1;
}
console.log(`Total Guests in Question 16 are: ${count3}`);
// 19 (4)
for (let i = 0; i < 4; i++) {
    guests.pop();
}
let count4 = 0;
for (let i = 0; i < guests.length; i++) {
    count4 += 1;
}
console.log(`Total Guests in Question 17 are: ${count4}`);
