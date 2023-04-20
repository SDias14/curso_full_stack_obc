/* // method 1 - create
(async () => {
    const Planet = require('./models/Planet');

    
    const newPlanet = await Planet.create({
        name: 'Venus',
        position: 5,
    });

    console.log(newPlanet);
    
    
    
})();

*/
   /*
// method 2 - list 

(async () => {
    const Planet = require('./models/Planet');

 
    
    const seePlanets = await Planet.findAll();

    console.log(seePlanets);


})();

*/


/*
// method 3 - list one 

(async () => {
    const Planet = require('./models/Planet');

 
    
    //const seePlanetsById = await Planet.findByPk(3);

    const seePlanetsById = await Planet.findAll({
        where: {
            name : 'Venus'
        } 
    });

    console.log(seePlanetsById);


})();

*/

/*

// method 4 - update

(async () => {
    const Planet = require('./models/Planet');

 
    // first find the planet
    const updatePlanet = await Planet.findByPk(3);
    
    console.log(updatePlanet);
    // then update the planet
    updatePlanet.name = 'Mars';

    console.log(updatePlanet);

// save the planet
    await updatePlanet.save();
// print the planet
    console.log(updatePlanet);

})();

*/

// method 5 - delete

(async () => {
    const Planet = require('./models/Planet');

 
    // first find the planet
    const deletePlanet = await Planet.findByPk(3);
    
    
    
    await deletePlanet.destroy();

    console.log('Planet deleted');

})();
    



