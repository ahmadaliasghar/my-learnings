const unitsConsumed:number = 250; 
let taxPercentage:number = 0;

if (unitsConsumed > 500) {
  taxPercentage = 0.25;
} else if (unitsConsumed > 200) {
  taxPercentage = 0.15;
} else if (unitsConsumed > 100) {
  taxPercentage = 0.10;
}

const baseRate:number = 45; 
const billAmount:number = unitsConsumed * baseRate;
const taxAmount:number = billAmount * taxPercentage;
const totalBill:number= billAmount + taxAmount;

console.log(`Total Bill for ${unitsConsumed} units: ${totalBill.toFixed(2)} rupees`);
