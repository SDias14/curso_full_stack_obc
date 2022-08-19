class Spaceship {
    constructor(name) {
        this.name = name;
        this.velocity = 0;
    }

    accelerate(acceleration) {
        this.velocity += acceleration;
    }
}


const spaceship = new Spaceship('Enterprise');

console.log(spaceship); // velocity: 0

spaceship.accelerate(5);
console.log(spaceship.velocity); // 5

spaceship.accelerate(10);

console.log(spaceship.velocity); // 15

console.log(spaceship) // velocity final value: 15