//1. Write a statement that assigns 1 to x if y is greater than 0.

let x: number;
let y: number = 5; 

if (y > 0) {
  x = 1;
}   else {
  x = 0; 
}

console.log(x); 

//2. Declare a number variable. Write a statement which increases the variable value by 5 if the value is between 80 and 90. 
//If the value is less than 80 increase the value by 3 marks.  
// If both statements are not true then set the printed output to be “The variable value isn’t changed”. Make the output of the first condition to be true and print the result.

let num: number = 82; // Example value for num

if (num > 80 && num < 90) {
  num += 5;
} else if (num < 80) {
  num += 3; 
} else {
  console.log("The variable value isn’t changed");      
}
console.log(num);  

//3. Display the name of the month by rewriting this code in switch statement. 

 
let month: number = 9;
let monthString: string;

switch (month) {
    case 1:
        monthString = "January";
        break;
    case 2:
        monthString = "February";
        break;
    case 3:
        monthString = "March";
        break;
    case 4:
        monthString = "April";
        break;
    case 5:
        monthString = "May";
        break;
    case 6:
        monthString = "June";
        break;
    case 7:
        monthString = "July";
        break;
    case 8:
        monthString = "August";
        break;
    case 9:
        monthString = "September";
        break;
    case 10:
        monthString = "October";
        break;
    case 11:
        monthString = "November";
        break;
    case 12:
        monthString = "December";
        break;

    default:
        monthString = "Invalid month";
}

console.log(monthString);


    //4. The code below is supposed to print the integers from 10 to 1 backwards.
//    What is wrong with it? Correct the code so it does the right thing.

let count: number = 10;

while (count >= 0) {
    console.log(count);
    count = count - 1;
}

//5. Print the integers from 5 to 100 by 5s (e.g. 5, 10, 15, and so on).

let number: number = 5;
while (number <= 100) {
    console.log(number);
    number = number + 5;

}



//6. Write a code to break the loop:

//for (int index = 0; index < 5; index++)

//when index is 2.


for (let index = 0; index < 5; index++) {
    if (index === 2) {
        break; 
    }
    console.log(index);
}
