console.log("connected");

/*
5. Instructions
- Create a loop where it will count from 20 to 0.
- Display the number in the console if it is an even number.
*/

for (let i = 20; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
    else {

    }
}

//STRETCH GOALS
num5 = prompt("Enter a value from 0 to 20:");

function printEven(num5) {
    if (num5 > 20) {
        console.log("Number is higher than 20.");
    }
    else {
        for (num5; num5 >= 0 && num5 <= 20; num5--) {
            if (num5 % 2 == 0) {
                console.log(num5);
            }
            else {
                
            }
        }
    }
}
printEven(num5);