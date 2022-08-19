/* 

as classes podem ser instanciadas 

instancia de uma classe é uma criação a partir de uma classe

as classes vem com o metodo construtor

class Station {
    constructor(name, platformQuantity) {
        this.name = name;
        this.platformQuantity = platformQuantity;
    }
}

let observator = new Station('Observation', 2);


console.log(observator);


*/

//classe com parametro default

class Station {
    constructor(name, platformQuantity = 2) {
        this.name = name;
        this.platformQuantity = platformQuantity;
    }
}

let observator = new Station('Observation');

console.log(observator);


