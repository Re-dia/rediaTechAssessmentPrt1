console.log("connected");

/*
4. Instructions
- Create a function that will accept a number, if the number given by the user is an odd number, display "odd number". If even number, display "even number".
- Before logging an odd or even number, check the input of the user. If the user input is a string such as "one", "two", "or three", display unexpected input.

Try these arguments (TEST CASES)
5
10
"8"
"20"
"seven"
"Fifteen"
true
null
undefined
NaN
*/

let number = prompt("Enter a number and I'll tell you if it's and odd number or even number:");

function checkNumber(number) {
    if (isNaN(number)) {
        console.log("Unexpected Input");
    }
    else {
        if (number % 2 == 1) {
            console.log("Odd Number");
        }
        else {
            console.log("Even Number");
        }
    }
}

checkNumber(number);