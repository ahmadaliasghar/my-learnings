"use strict";
// 18Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let myFavPlaces = ["New York City", "Istanbul", "Cairo", "Disney Land", "Aurora"];
console.log("Orignal Array: ", myFavPlaces);
console.log("In Alphabetical Form: ", [...myFavPlaces].sort());
console.log("Again in Original Form: ", myFavPlaces);
console.log("In Reverse Alphabetical Form: ", [...myFavPlaces].sort().reverse());
console.log("Again in Original Form: ", myFavPlaces);
console.log("Reverse in Original Form: ", myFavPlaces.reverse());
console.log("Again Reverse in Original Form: ", myFavPlaces.reverse());
console.log("Sort in Alphabetical Form: ", myFavPlaces.sort());
console.log("Sort Reverse Alphabetical Form: ", myFavPlaces.sort().reverse());
