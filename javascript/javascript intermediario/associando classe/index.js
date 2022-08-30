//associações de classes

class captain {
    constructor(name, age, flightHours) {
        this.name = name;
        this.age = age;
        this.flightHours = flightHours;
    }
}

class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.captain = new captain(captainName, captainAge, captainFlightHours);
    }
}


let spaceWalkers = new Spaceship('Space Walkers', 2, 'John Doe', 30, 200);


console.log(spaceWalkers);