class Property {
    constructor(area, price){
        this.area = area;
        this.price = price;
    }

    getPricePerArea(){
        return this.price / this.area;
    }
}

class House extends Property {}

class Apartment extends Property {
    constructor (number, area, price){
        super(area, price); // o super chama o construtor da classe pai
        this.number = number;
    }




    
    }



const house = new House(100, 1000000);

const apartment = new Apartment(100, 1000000, 2);

console.log(apartment)