// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function insertValue(arr: number[], index: number, value: number): number[] {
    arr.splice(index, 0, value);

    return arr;
  }
  
  const originalArray: number[] = [1, 2, 3, 4];
  const indexToInsert: number = 2;
  const valueToInsert: number = 8;
  
  const modifiedArray: number[] = insertValue(originalArray, indexToInsert, valueToInsert);
  
  console.log(modifiedArray);
  