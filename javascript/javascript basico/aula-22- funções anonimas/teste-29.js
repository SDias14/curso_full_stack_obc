// funcoes anonimas

/*


let doubleSpeed = function(velocity){
    return velocity * 2;
} 

let newVelocity = doubleSpeed(40);

console.log(newVelocity)

*/
console.log(speedUp(60, 10))



let doubleSpeed = function(velocity){
  return velocity * 2;
} 

console.log(doubleSpeed(50))




function speedUp(velocity, acceleration){
  return velocity + acceleration;
}// funcoes tradicicionais sao consideradas funcoes globais, podendo ser acessadas de qualqer qualquer lugar
