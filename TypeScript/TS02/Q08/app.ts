// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

function convertTemperatures(celciusTemp: number[]): number[] {
  const fahrenheitTemperatures: number[] = [];
  let i = 0;

  while (i < celciusTemp.length) {
    const celsius = celciusTemp[i];
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitTemperatures.push(fahrenheit);
    i++;
  }

  return fahrenheitTemperatures;
}

const celciusTemp: number[] = [25, 30, 15, 10, 5];
const fahrenheitTemperatures: number[] = convertTemperatures(celciusTemp);

console.log("Celsius Temperatures:", celciusTemp);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
