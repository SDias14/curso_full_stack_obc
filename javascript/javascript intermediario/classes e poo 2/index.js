//todo objeto é criado a partir de uma classe. A classe é como um molde e conseguimos definir algumas características que o objeto vai ter.


class Spaceship {

    constructor(name, crew) {
        this.name = name;
        this.crew = crew;
    }

}

let ship = new Spaceship('Enterprise', 5);

console.log(ship);