let total:number = 150;
let discount:number = 0;

if(total > 100) {
    discount = (10 / 100) * total; 
} else {
    discount = (5 / 100) * total; 
}

console.log(`Your total bill is: ${total}\nDiscount: ${discount}\nYour Sub Total is: ${total - discount}`)