class Car {

    constructor( name, velocity) {
// atributos privados

        this.name = name;
        this.velocity = velocity;
    }

}
    
let carName1 = prompt('Digite o nome do carro 1: '); 

let carVelocity1 = prompt('Digite a velocidade do carro 1: '); 

let car1 = new Car(carName1, carVelocity1);

let carName2 = prompt('Digite o nome do carro 2: ');

let carVelocity2 = prompt('Digite a velocidade do carro 2: ');

let car2 = new Car(carName2, carVelocity2);


if (car1.velocity > car2.velocity) {
    alert('O carro mais rápido é o ' + car1.name);
} else if(car1.velocity < car2.velocity) {
    alert('O carro mais rápido é o ' + car2.name);
} else {
    alert('Os carros tem a mesma velocidade');
}




