"use strict";
// 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function myburger(...items) {
    console.log("Summary of items: ");
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        console.log(element);
    }
}
myburger("Petty", "Cheese", "Ketchup");
myburger("Petty", "Cheese", "Ketchup", "Sauce");
myburger("Petty", "Cheese", "Ketchup", "Sauce", "Mayonise");
