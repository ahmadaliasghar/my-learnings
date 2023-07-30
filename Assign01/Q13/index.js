"use strict";
// 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let myArr = ["Honda Civic", "Hyndai Elantra", "Kia Sportage"];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log("I would like to buy a brand new " + element);
}
