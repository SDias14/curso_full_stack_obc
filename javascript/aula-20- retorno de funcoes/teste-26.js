// retorno de funcoes 

/*

function speedUp(velocity , acceleration){
    let newVelocity = velocity + acceleration;
    console.log(newVelocity);
   
}


let velocity = 80 
let acceleration = 5 

console.log(velocity);

velocity = speedUp (velocity, acceleration);

console.log(velocity);

*/

let number = 4
let anotherNumber = 3 

function add(n1, n2){
   return (n1 + n2);
}

function multiply(n1,n2){
  return n1 * n2
}

var sum = add(number, anotherNumber);
var mult = multiply(prompt('Enter a number'), sum)

console.log (mult);

// return vai retornar o valor da função para fora da função para que possamos usar esse valor em outros locais. 