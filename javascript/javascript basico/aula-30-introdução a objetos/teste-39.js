//  introdução a objetos 

//objetos sao estruturas de dados que sao capazes de armazenar outros dados

//os objetos sao organizados por propriedades

//associação chave-valor

// chave : nome da propriedade , valor : valor da propriedade

//armazenamos outros objetos dentro de um objeto. 

let spaceship = {
    nome : 'Fenix', 
    crewQuantity : 7,
    type : 'BattleShip'
} // criando um objeto 


console.log(spaceship); // imprimindo o objeto

console.log(spaceship.type); // imprimindo o valor da propriedade type

console.log(spaceship.crewQuantity); // imprimindo o valor da propriedade crewQuantity

console.log(spaceship['nome']); // imprimindo o valor da propriedade nome

spaceship.isHitched = false; // criando uma propriedade no objeto

console.log(spaceship); // imprimindo o objeto

console.log(spaceship.isHitched); // imprimindo o valor da propriedade isHitched

spaceship['shield'] = 'none'; // criando uma propriedade no objeto

console.log(spaceship); // imprimindo o objeto

// pode ser chamada tanto com colchetes quanto com o ponto