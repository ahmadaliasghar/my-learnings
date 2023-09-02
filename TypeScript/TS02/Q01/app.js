"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function insertValue(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
const originalArray = [1, 2, 3, 4];
const indexToInsert = 2;
const valueToInsert = 8;
const modifiedArray = insertValue(originalArray, indexToInsert, valueToInsert);
console.log(modifiedArray);
