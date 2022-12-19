const ships = require('./Ships.js');

const turnOn = (ship) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // se a capacidade atual for menor que 30% da capacidade total
            if (ship.capacityNow < ship.capacity * 0.3) {
               
                reject(ship);
            } else {
                resolve(ship);
            }
        }, 2000);
    });
};








const ship1 = new ships('Sophia', 10, 4);

const ship2 = new ships('Amsterda', 14 , 10);

const ship3 = new ships('Estrela - Anã ', 20, 2);

turnOn(ship1).then((ship) => {
    console.log(`A nave ${ship.name} está ligada`);
}).catch((ship) => {
    console.log(`A nave ${ship.name} não pode ser ligada`);
});

turnOn(ship2).then((ship) => {
    console.log(`A nave ${ship.name} está ligada`);
}).catch((ship) => {
    console.log(`A nave ${ship.name} não pode ser ligada`);
});

turnOn(ship3).then((ship) => {
    console.log(`A nave ${ship.name} está ligada`);
}).catch((ship) => {
    console.log(`A nave ${ship.name} não pode ser ligada`);
});



