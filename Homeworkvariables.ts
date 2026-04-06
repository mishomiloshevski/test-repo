// 1.Build an introduction sentence. Use name, city, and age variables inside a template literal to produce: "Hi, I'm Alex, 20 years old, from Berlin."

let Firstname: string = "Alex";
let city: string = "Berlin";    
let age: number = 20;

console .log(`Hi, I'm ${Firstname}, ${age} years old, from ${city}.`);

// 2.Cinema ticket costs 8.50 for a group of 4. Calculate total, 10% discount, and final price.

let ticketPrice: number = 8.50;
let groupSize: number = 4;
let total: number = ticketPrice * groupSize;
let discount: number = total * 0.10;
let finalPrice: number = total - discount;

console.log(`Total: $${total.toFixed(2)}`);
console.log(`Discount: $${discount.toFixed(2)}`);
console.log(`Final Price: $${finalPrice.toFixed(2)}`);

// 3. Three friends go out for dinner. The bill is €54.00. They want to leave a 15% tip and then split the total equally. 
// Calculate the tip amount, the grand total, and how much each person pays.

let bill: number = 54.00;
let tip: number = bill * 0.15;
let grandTotal: number = bill + tip;
let splitAmount: number = grandTotal / 3;

console.log(`Tip Amount: €${tip.toFixed(2)}`);
console.log(`Grand Total: €${grandTotal.toFixed(2)}`);
console.log(`Each person pays: €${splitAmount.toFixed(2)}`);

// 4.Given a number, evaluate if it's positive or negative. Print the result.

let x: number = -7;
if (x > 0) {
    console.log(`${x} is positive.`);
} else if (x < 0) {
    console.log(`${x} is negative.`);
} else {
    console.log(`${x} is zero.`);
}   