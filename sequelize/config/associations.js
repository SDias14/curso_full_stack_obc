//importing models

const Planet = require('../src/models/Planet');
const Satellite = require('../src/models/Satellite');
const Cap = require('../src/models/Cap');
const Spaceship = require('../src/models/Spaceship');

//creating associations


Planet.hasOne(Satellite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Satellite.belongsTo(Planet, {foreignKey: 'planetId', as: 'planet'});

/*

Planet.hasMany(Satellite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Satellite.belongsTo(Planet, {foreignKey: 'planetId', as: 'planets'});

*/

Cap.belongsToMany(Spaceship, {
    foreingKey: 'capId',
    through: 'capSpaceships',
    as: 'spaceships' 
  });

  
  
    Spaceship.belongsToMany(Cap, {
    foreingKey: 'spaceshipId',
    through: 'capSpaceships',
    as: 'caps'
    })
  
  



module.exports = {Planet, Satellite};
