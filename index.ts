// 1. Hello Variable
let greeting: string = "Hello, World!";
console.log(greeting);

// 2. Basic Math
let num1: number = 5;
let num2: number = 3;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// 3. Swapping Values
let a: number = 1;
let b: number = 2;
[a, b] = [b, a];
console.log("a:", a, "b:", b);

// 4. Type Annotation (TypeScript)
let message: string;
// Assigning a number to a string variable will result in a TypeScript error
// message = 10;

// 5. Modulus Operator
let num3: number = 10;
let num4: number = 3;
console.log("Remainder:", num3 % num4);

// 6. Increment Challenge
let counter: number = 0;
counter++; // Increment using unary operator
counter += 1; // Increment using compound assignment operator
console.log("Counter:", counter);

// 7. Logical Gates
let x: boolean = true;
let y: boolean = false;
let z: boolean = true;
console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT:", !z);

// 8. Compound Assignment
let num: number = 10;
num += 5; // Addition
num -= 3; // Subtraction
num *= 2; // Multiplication
num /= 4; // Division
console.log("Result:", num);

// 9. Even or Odd
let num5: number = 7;
if (num5 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 10. Voting Eligibility
let age: number = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 11. Grading System
let score: number = 85;
let grade: string;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Grade:", grade);

// 12. Max of Three
let x1: number = 10;
let y1: number = 5;
let z1: number = 8;
let max1: number = Math.max(x1, y1, z1);
console.log("Max:", max1);

// 13. Leap Year Checker
let year: number = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

// 14. Fahrenheit to Celsius Converter
let fahrenheit: number = 68;
let celsius: number = (fahrenheit - 32) * 5 / 9;
console.log("Celsius:", celsius);

// 15. Positive, Negative, or Zero
let number: number = -5;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 16. Multiplication Table
let number1: number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number1} x ${i} = ${number1 * i}`);
}
