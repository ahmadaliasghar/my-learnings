"use strict";
// 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Ahmad", "Ali", "Zeeshan"];
function show_magicians(name) {
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        console.log(element);
    }
}
show_magicians(magicians);
