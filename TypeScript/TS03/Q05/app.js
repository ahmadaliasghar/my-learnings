"use strict";
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function removeFail(grades) {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
    return grades;
}
const gradesArray = [65, 42, 75, 30, 85, 47, 60];
const passGrades = removeFail(gradesArray);
console.log("Grades after removing failing grades:", passGrades);
