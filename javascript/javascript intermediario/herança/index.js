// heranças 

/* 
 POO

 REUSO DE CÓDIGO


*/


class Spaceship {
    constructor(name, crew, maxSpeed, currentSpeed = 0) {
        this.name = name;
        this.crew = crew;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = currentSpeed;
    }

    speedUp(acceleration) {
        this.currentSpeed += acceleration;
        if (this.currentSpeed > this.maxSpeed) {
            console.log("Speed too high!");
        
    }
}

}


class Fighter extends Spaceship {
   stop() {
         this.currentSpeed = 0;
         console.log("Stopped");
    }
}

class Discovery extends Spaceship {
    stop() {
          this.currentSpeed = 0;
          console.log("Sample extracted");
     }
 }


let darwin = new Discovery("Darwin", 2, 100);

let fenix = new Fighter("Fenix", 2, 100);

console.log(darwin);


darwin.speedUp(210);
darwin.stop();
