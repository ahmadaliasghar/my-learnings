"use strict";
let total = 150;
let discount = 0;
if (total > 100) {
    discount = (10 / 100) * total;
}
else {
    discount = (5 / 100) * total;
}
console.log(`Your total bill is: ${total}\nDiscount: ${discount}\nYour Sub Total is: ${total - discount}`);
