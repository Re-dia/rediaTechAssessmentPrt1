console.log("connected");

/*
7. Instructions
Login attempts using JS Loops

The goal for this task is to ensure that nested if statements are implemented. This will be your baseline for your account security.

The mock login lets the user attempt logging in three times.

Username: student@mail.com
Password: discovery

Create a prompt where a user will enter a username/email.

Create a prompt where a user will enter a password.

When a user enters the correct username and password, it will alert us that the login is successful.

When a user enters an incorrect username and password, it will display several attempts until it reaches zero.
*/

let sampleEmail = "student@mail.com";
let samplePassword = "discovery";

let email = prompt("Enter a username or email");
let password = prompt("Enter a password");

function loginAttempts(email, password) {
    for (let i = 3; i >= 0; i--) {
        if (email == sampleEmail && password == samplePassword) {
            alert("SuccessFully Login");
            break;
        }
        else {
            alert("Login Failed Now Only " + i + " Login Attempts Available");
            if (i == 0){
                break;
            }
            email = prompt("Enter a username or email");
            password = prompt("Enter a password");

        }
    }
}

loginAttempts(email, password);