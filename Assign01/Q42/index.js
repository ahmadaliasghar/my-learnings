"use strict";
// 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ["Ahmad", "Ali", "Zeeshan"];
function make_great(name) {
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        console.log(`Great ${element}`);
    }
}
make_great(magicians);
