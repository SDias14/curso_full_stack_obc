class Vehicle {
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }

  move() {

    console.log('Moving');
 
  }
}

class Car extends Vehicle {
  constructor(brand, model, color, doors) {
    super(brand, model, color);
    this.doors = doors;
  }

    move() {

    console.log('Moving with 4 wheels');
   

    }


}

class Motorcycle extends Vehicle {
  constructor(brand, model, color, wheels) {
    super(brand, model, color);
    this.wheels = wheels;
  }

  move(speed) {

   console.log (`Moving with ${speed} km/h` )
  
    
  }
}


const car = new Car('Ford', 'Ka', 'Black', 4);

const motorcycle = new Motorcycle('Honda', 'CG', 'Red', 2);

car.move();
motorcycle.move(50);

