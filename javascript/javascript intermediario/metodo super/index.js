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

class transport extends Spaceship{
    constructor (name, crewMembers, maxSpeed, cargoCapacity){
     super(name, crewMembers, maxSpeed)  
    this.cargoCapacity = cargoCapacity;
}
speedUp(acceleration){
    acceleration /= 2;
    console.log("incremento " + acceleration + " km/s");
    super.speedUp(acceleration);

}
}


let acadia = new transport("Acadia", 5, 100, 100);

acadia.speedUp(210);

console.log(acadia);