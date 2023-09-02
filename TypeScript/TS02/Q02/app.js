"use strict";
let cart = [];
function addItem(item) {
    cart.push(item);
}
function removeItem(index) {
    cart.splice(index, 1);
}
function updateItem(index, item) {
    cart.splice(index, 1, item);
}
addItem("Cup");
addItem("Shirt");
addItem("Mobile");
console.log("Cart: ", cart);
removeItem(1);
console.log("After Removing item from cart: ", cart);
updateItem(0, "Mug");
console.log("After Updating item in cart: ", cart);
