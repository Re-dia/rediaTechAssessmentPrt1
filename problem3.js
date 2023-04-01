console.log("connected");

/*
3. Instructions
Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.
Create a Switch Statement that accepts the colors: Black, Violet, and Pink.
Lowercase and Uppercase letters must be accepted
*/

let color = prompt("Choose a color between Black, Violet, and Pink: ");

function sayColor(color) {
    switch (color.toUpperCase()) {
        case 'BLACK':
            console.log("You entered the color Black.");
            break;
        case 'VIOLET':
            console.log("You entered the color Violet.");
            break;
        case 'PINK':
            console.log("You entered the color Pink.");
            break;
        default:
            console.log("Not a color from the options.");
            break;
    }
}

sayColor(color);