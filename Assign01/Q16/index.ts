// 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests :string[] = ["Ali", "Einstein", "Usman"];

for (let i:number = 0; i < guests.length; i++) {
    console.log("Hey " + guests[i] + ", You are invited to a dinner party");
}

let guestNotCome = guests.splice(2, 1, "Akbar");
console.log(`\nWe are sorry that ${guestNotCome} will not be able to come\n`);

console.log("New List of Guest: ");
for (let i:number = 0; i < guests.length; i++) {
    console.log("Hey " + guests[i] + ", You are invited to a dinner party");
}
console.log("\nWe are happy to announce that we just found a bigger table\n");

guests.unshift("Ahsan");
guests.splice(2, 0, "Faran")
guests.push("Zeeshan")

for (let i:number = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, You are invited to a dinner party!`);
}
