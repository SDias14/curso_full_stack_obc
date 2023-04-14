

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

let option = prompt('Enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division or 5 to exit');

while (option != 5) {
    if (option == 1) {
       alert(sum(parseInt(num1), parseInt(num2)));
} else if (option == 2) {
        alert(subtract(parseInt(num1), parseInt(num2)));
    } else if (option == 3) {
        alert(multiply(parseInt(num1), parseInt(num2)));
    } else if (option == 4) {
        alert(divide(parseInt(num1), parseInt(num2)));
    }
    let option2 = prompt('Do you wanna set new numbers? Enter 1 for yes or 2 for no');

    if (option2 == 1) {
        num1 = prompt("Enter first number");
        num2 = prompt("Enter second number");
    } else if (option2 == 2) {
        num1 = num1;
        num2 = num2;
    }

    option = prompt('Enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division or 5 to exit');

    
}

alert('Goodbye');

function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}