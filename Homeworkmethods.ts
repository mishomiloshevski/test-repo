//1. Create new class named MethodsClass that will contain the methods for today's exercises.Create a method to find the smallest number among three numbers
//The method should require three arguments when called.

class MethodsClass {

    smallestNumber(x: number, y: number, z: number): number {
        if (x <= y && x <= z) {
            return x;
        } else if (y <= x && y <= z) {
            return y;
        } else {
            return z;
        }   
    }
}

const method = new MethodsClass();
console.log(method.smallestNumber(21, 9, 15));







//2.Create a method to compute the average of three numbers
//The method should require three arguments when called
//The result of the method’s computation should be transferred to new variable named average.
// Print the variable value in the console.


class MethodsClass2 {

    average(x: number, y: number, z: number): number {
        return (x + y + z) / 3;
    }
}

const method2 = new MethodsClass2();
const average = method2.average(7, 5, 3);
console.log(average);








//3.Create a method to compute the sum of the digits in a hole number.
//The method should return the sum
//Print the sum in console directly without storing it in a variable.


class MethodsClass3 {

    sumOfDigits(x: number): number {
        let sum = 0;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        return sum;
    }
}

const method3 = new MethodsClass3();
console.log(method3.sumOfDigits(78935));










//4.Create new class named Car
//Within the class create five variables for :brand, model, transmission type, fuel type and number of gears
//Create a constructor for the class
//Create new object from the Car class
//Print the variable values
//Update the model and fuel type; print them again.

class Car {
    brand: string;
    model: string   ;
    transmissionType: string;
    fuelType: string;
    numberOfGears: number;      

    constructor(brand: string, model: string, transmissionType: string, fuelType: string, numberOfGears: number) {
        this.brand = brand;
        this.model = model;
        this.transmissionType = transmissionType;
        this.fuelType = fuelType;
        this.numberOfGears = numberOfGears;
    }  
}

const car1 = new Car("Toyota", "Corolla", "Automatic", "Gasoline", 6);
console.log(`Brand: ${car1.brand}, Model: ${car1.model}, Transmission Type: ${car1.transmissionType}, Fuel Type: ${car1.fuelType}, Number of Gears: ${car1.numberOfGears}`);

car1.model = "Camry";
car1.fuelType = "Hybrid";
console.log(`Updated Model: ${car1.model}, Updated Fuel Type: ${car1.fuelType}`);   







//5.Create new class named Person
//Within the class create four variables for :first name, last name, age, occupation and assign some default values for all of them
//Create a constructor that can utilize the default values when creating objects
//Create new object from the Person class with default values and print them as one sentence
//Update the variable values and print them again


class Person {
    firstName: string;
    lastName: string;
    age: number;
    occupation: string;

    constructor(firstName: string = "John", lastName: string = "Doe", age: number = 30, occupation: string = "Engineer") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }
}

const person1 = new Person();
console.log(`Name: ${person1.firstName} ${person1.lastName}, Age: ${person1.age}, Occupation: ${person1.occupation}`);

person1.firstName = "Jane";
person1.lastName = "Smith";
person1.age = 25;
person1.occupation = "Designer";
console.log(`Updated Name: ${person1.firstName} ${person1.lastName}, Updated Age: ${person1.age}, Updated Occupation: ${person1.occupation}`);