alert("Welcome to the multiplication table");

let mathTable = prompt("Enter a number between 1 and 10");

for(let i = 1; i <=20; i++){
    let result = mathTable * i;
    console.log(`${mathTable} x ${i} = ${result}`);
}