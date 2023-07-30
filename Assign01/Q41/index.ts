// 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians :string[] = ["Ahmad", "Ali", "Zeeshan"];
function show_magicians(name: string[]):void {
    for (let i:number = 0; i < name.length; i++) {
        const element = name[i];
        console.log(element);   
    }
}
show_magicians(magicians);
