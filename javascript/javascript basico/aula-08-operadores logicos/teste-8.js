//tabela verdade 

//tabela verdade dos operadore e e ou

let spaceship = "Elemental";
let velocity = 20; 

// operador &&

//verdadeiro && verdadeiro = verdadeiro

console.log(spaceship.length == 9 && velocity > 15); // valor true : a primeira expressao é verdadeira e a segunda é verdadeira. 

//verdadeiro && falso = falso

console.log (velocity >10 && velocity <19); // valor false : a primeira expressao é verdadeira e a segunda é falsa.

//falso && verdadeiro = falso

console.log(velocity < 17 && spaceship == "Elemental"); // valor false : a primeira expressao é falsa e a segunda é verdadeira.

//falso && falso = falso

console.log(spaceship == "Golias" && velocity > 21); // valor false : a primeira expressao é falsa e a segunda é falsa.


//tabela verdade do operador ou

//verdadeiro || verdadeiro = verdadeiro

console.log(spaceship.length == 9 || velocity > 15); // valor true : a primeira expressao é verdadeira ou a segunda é verdadeira.

//verdadeiro || falso = verdadeiro


console.log (velocity >10 || velocity <19); // valor true : a primeira expressao é verdadeira ou a segunda é falsa.

//falso || verdadeiro = verdadeiro


console.log(velocity < 17 || spaceship == "Elemental"); // valor true : a primeira expressao é falsa ou a segunda é verdadeira.


//falso || falso = falso

console.log(spaceship == "Golias" ||velocity > 21); // valor false : a primeira expressao é falsa ou a segunda é falsa.

// inversao de valor = nao

//!verdadeiro = falso

console.log(!(velocity > 19)); // valor false : inverte o valor da expressao.

//!falso = verdadeiro

console.log(!(spaceship == "Golias")); // valor true : inverte o valor da expressao.



console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 &&spaceship.length + 1 > 15 ) ); 

//!( F ) || ( F ) = V



