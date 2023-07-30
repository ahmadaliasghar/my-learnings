// 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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
console.log("\nWe are sorry that we can only invite two persons for dinner\n");

for (let i:number = 0; i < 4; i++) {
    console.log(`Dear ${guests.pop()}, We are not able to invite you!!!`);
}

for (let i:number = 0; i < guests.length; i++) {
    const element = guests[i];
    console.log(`Dear ${element}, You are invited to our party`)
}

guests.pop();
guests.pop();

console.log("Final Guests are: ")
for (let i:number = 0; i < guests.length; i++) {
    const element = guests[i];
    console.log(element)
}

