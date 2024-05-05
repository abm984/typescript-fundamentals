var _a;
// 1. Hello Variable
var greeting = "Hello, World!";
console.log(greeting);
// 2. Basic Math
var num1 = 5;
var num2 = 3;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
// 3. Swapping Values
var a = 1;
var b = 2;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a:", a, "b:", b);
// 4. Type Annotation (TypeScript)
var message;
// Assigning a number to a string variable will result in a TypeScript error
// message = 10;
// 5. Modulus Operator
var num3 = 10;
var num4 = 3;
console.log("Remainder:", num3 % num4);
// 6. Increment Challenge
var counter = 0;
counter++; // Increment using unary operator
counter += 1; // Increment using compound assignment operator
console.log("Counter:", counter);
// 7. Logical Gates
var x = true;
var y = false;
var z = true;
console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT:", !z);
// 8. Compound Assignment
var num = 10;
num += 5; // Addition
num -= 3; // Subtraction
num *= 2; // Multiplication
num /= 4; // Division
console.log("Result:", num);
// 9. Even or Odd
var num5 = 7;
if (num5 % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
// 10. Voting Eligibility
var age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}
// 11. Grading System
var score = 85;
var grade;
if (score >= 90) {
    grade = "A";
}
else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
}
else {
    grade = "F";
}
console.log("Grade:", grade);
// 12. Max of Three
var x1 = 10;
var y1 = 5;
var z1 = 8;
var max1 = Math.max(x1, y1, z1);
console.log("Max:", max1);
// 13. Leap Year Checker
var year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
}
else {
    console.log("Not a leap year");
}
// 14. Fahrenheit to Celsius Converter
var fahrenheit = 68;
var celsius = (fahrenheit - 32) * 5 / 9;
console.log("Celsius:", celsius);
// 15. Positive, Negative, or Zero
var number = -5;
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// 16. Multiplication Table
var number1 = 5;
for (var i = 1; i <= 10; i++) {
    console.log("".concat(number1, " x ").concat(i, " = ").concat(number1 * i));
}
