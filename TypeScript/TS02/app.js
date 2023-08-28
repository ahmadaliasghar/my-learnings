"use strict";
// //Qusttion 01
// function changeArray(arr: number[], index: number, newValue:number):number[] {
//     console.log("🚀 ~ file: app.ts:3 ~ changeArray ~ arr:", arr)
//     console.log("🚀 ~ file: app.ts:3 ~ changeArray ~ arr:", arr.splice(index, 0, newValue))
//     const newArr: number[] = arr.splice(index, 0, newValue);
//     console.log("🚀 ~ file: app.ts:4 ~ changeArray ~ newArr:", newArr)
//     return newArr;
// }
// const myarr:number[] = [10, 15, 20, 25];
// const resultarr:number[] = changeArray(myarr, 2, 18);
// console.log(resultarr);
// // Question 02
// Create a TODO Crud 
// {
//     id:number(specific),
//     text:string
// }
let arr = [{
        id: 1,
        text: "This is first todo."
    }];
//add todo
let newTodo = {
    id: 3,
    text: "This is my third"
};
arr = [...arr, newTodo];
// arr.push(newTodo);
console.log(arr);
arr = arr.map((item) => (item.id === 3 ? { id: 3, text: "Todo by Ahmad" } : item));
console.log(arr);
