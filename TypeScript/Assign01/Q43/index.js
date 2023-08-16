"use strict";
// 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["Ahmad", "Ali", "Zeeshan"];
function make_great(name) {
    let newarr = [];
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        newarr.push(`Great ${element}`);
    }
    return newarr;
}
function show_magicians(name) {
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        console.log(element);
    }
}
let greatmags = make_great(magicians);
show_magicians(magicians);
show_magicians(greatmags);
