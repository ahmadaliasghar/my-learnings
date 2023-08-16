// 45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function Cars(manufacturer:string, model: string, ...args: string[]) {
    type Car = {
        manufacturer:string;
        model:string;
        [name: string]: string;
    }
    let carinfo:Car = {
        manufacturer: manufacturer,
        model:model
    }

    for (let i = 0; i < args.length; i += 2) {
        const name:string = args[i];
        const value:string = args[i + 1];
        carinfo[name] = value;
    }
    return carinfo;
}

let car1 = Cars("Toyota", "Corola");
console.log(car1);
console.log();

let car2 = Cars("Hyndai", "Elantra", "color", "Black", "type", "Automatic");
console.log(car2)