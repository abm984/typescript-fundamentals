const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", function(ageStr) {
    let age = parseInt(ageStr);
    if (!isNaN(age)) {
        if (age < 18) {
            console.log("You are a minor.");
        } else {
            console.log("You are an adult.");
        }
    } else {
        console.log("Invalid input. Please enter a valid age.");
    }
    rl.close();
});
