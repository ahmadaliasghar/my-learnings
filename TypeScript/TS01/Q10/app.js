"use strict";
const unitsConsumed = 250;
let taxPercentage = 0;
if (unitsConsumed > 500) {
    taxPercentage = 0.25;
}
else if (unitsConsumed > 200) {
    taxPercentage = 0.15;
}
else if (unitsConsumed > 100) {
    taxPercentage = 0.10;
}
const baseRate = 45;
const billAmount = unitsConsumed * baseRate;
const taxAmount = billAmount * taxPercentage;
const totalBill = billAmount + taxAmount;
console.log(`Total Bill for ${unitsConsumed} units: ${totalBill.toFixed(2)} rupees`);
