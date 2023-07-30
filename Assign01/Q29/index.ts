
// 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits : string[];
favorite_fruits = ["Mango", "Apple", "Bananas"];

if(favorite_fruits.includes("Mango")) {
    console.log("You really likes Manogoes");
}
if(favorite_fruits.includes("Strawberry")) {
    console.log("You really likes Strawberries");
}
if(favorite_fruits.includes("Grapes")) {
    console.log("You really likes Grapes");
}
if(favorite_fruits.includes("Banana")) {
    console.log("You really likes Bananas");
}
if(favorite_fruits.includes("Orange")) {
    console.log("You really likes Oranges");
}
