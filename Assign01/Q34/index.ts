
// // 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas: string[] = ["Kabab Pizza", "Cheesy Pizza", "Malai Boti Pizza"];

for (let i:number = 0; i < pizzas.length; i++) {
    const element = pizzas[i];
    console.log("I like " +  element);
}
console.log("\nI like pizza so much. I often like to eat pizza with my friends. We go to stone ove at least two or three times in a monthto eat pizza. I really love pizza");
