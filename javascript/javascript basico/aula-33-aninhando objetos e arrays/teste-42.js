//  comparando objetos e arrays 

//aninhar : objetos dentro de objetos

// aninhar : arrays dentro de objetos

/*

let spaceship = {
    name : 'Enterprise',
    type: 'freighter',
    crew: ['Captain', 'Commander', 'Engineer', 'Doctor'], //array dentro de objeto
}

//acrescentando mais um crew member

    spaceship.crew.push('Security');

    console.log(spaceship.crew);

    */


    //aninhar objetos dentro de arrays

    /*

    let spaceships = [
        {name : 'elemental', type: 'freighter' , crewQuantity: 10},
        {name: 'colossus' , type: 'freighter' , crewQuantity: 20},
        {name: 'enterprise' , type: 'freighter' , crewQuantity: 30},
    ]

    let nameFirstSpaceship = spaceships[0].name;

    console.log(nameFirstSpaceship);

    let nameSecondSpaceship = spaceships[1].name;

    console.log(nameSecondSpaceship);

    let nameThirdSpaceship = spaceships[2].name;

    console.log(nameThirdSpaceship);

    let crewFirstSpaceship = spaceships[0].crewQuantity;

    console.log(crewFirstSpaceship);

    let crewSecondSpaceship = spaceships[1].crewQuantity;   

    console.log(crewSecondSpaceship);

    let crewThirdSpaceship = spaceships[2].crewQuantity;

    console.log(crewThirdSpaceship);

    */

    // percorrendo um array de objetos

    /*

    let spaceships = [
        {name : 'elemental', type: 'freighter' , crewQuantity: 10},
        {name: 'colossus' , type: 'freighter' , crewQuantity: 20},
        {name: 'enterprise' , type: 'freighter' , crewQuantity: 30},
    ]

    for(let i = 0; i < spaceships.length; i++){
        console.log(spaceships[i].name);
    }

    */

// percorrendo um array de objetos

/*
    let spaceships = [
        {name : 'elemental', type: 'freighter' , crewQuantity: 10},
        {name: 'colossus' , type: 'freighter' , crewQuantity: 20},
        {name: 'enterprise' , type: 'freighter' , crewQuantity: 30},
    ]

    spaceships.forEach(function(spaceship){
        console.log(spaceship.name + ' tem ' + spaceship.crewQuantity + ' crew members');
    })

    */

    //objeto dentro de objeto

    let spaceship = {
        name : 'Enterprise',
        maxCrew: 20,
        captain: {
            name : 'Hugo',
            age : 'unknown',
        }


    }

    //acessando o objeto dentro de um objeto

    console.log(spaceship.captain.name);

    console.log(spaceship.captain.age);

    console.log(spaceship.captain.name + ' tem ' + spaceship.captain.age + ' anos');






