//1. Create an array of type String with 5 variables inside. Print all elements using while loop.

let Nature: string[] = ["Sea", "Mountain", "Lake", "River", "Hill "];
let i: number = 0;
while (i < Nature.length) {
    console.log(Nature[i]);
    i++;
}

//2. Create an array of five doubles. Calculate the sum of all the elements and print the result. Calculate the average of all of the elements and print that too.

let numbers: number[] = [11.5, 7.8, 6.6, 2.4, 17.7];
let sum: number = 0;
let average: number;

for (let i: number = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

average = sum / numbers.length;

console.log("Sum of all numbers:", sum);
console.log("Average of all numbers:", average);

// 3.Use the array field provided below. Write a program that prints how many elements are odd numbers.

let field: number[] = [2, 20, 3, 13, 15, 3, 9, 10, 1, 5, 8];
let oddCount: number = 0;

for (let i: number = 0; i < field.length; i++) {
    if (field[i] % 2 !== 0) {
        oddCount++;
    }
}

console.log("Count of odd numbers:", oddCount);

// 4. Write a program to check if the values of the first and the last element of the array are the same.

let array: number[] = [1, 136, 212, 89, 13, 5, 1];

if (array[0] === array[array.length - 1]) {
    console.log("The first and last elements are the same.");
} else {
    console.log("The first and last elements are different.");
}