class Spaceship {
    constructor(name, crewMembers, maxSpeed) {
        this.name = name;
        this.crewMembers = crewMembers;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
    }
    speedUp(acceleration) {
        this.currentSpeed += acceleration;
        if (this.currentSpeed > this.maxSpeed) {
            console.log(`${this.name} is going too fast!`);
        }
    }
}

class Ship extends Spaceship {

    speedUp() {
        console.log('Transport ship is speeding up at 1km/s...');
        this.currentSpeed += 1;
    }
    
}


let acamadia = new Ship('Transport Ship', 4, 100);

acamadia.speedUp();

console.log(acamadia);