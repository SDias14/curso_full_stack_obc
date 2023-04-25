const express = require('express');

const app = express.Router();

// Planet Routes
const PlanetController = require('../src/controller/PlanetController');
const SatelliteController = require('../src/controller/SatelliteController');
const CapController = require('../src/controller/CapController');
const SpaceshipController = require('../src/controller/SpaceshipController');




app.get('/', PlanetController.index);
app.get('/planets/:id', PlanetController.show);
app.post ('/planets', PlanetController.store);
app.put('/planets/:id', PlanetController.update);
app.delete('/planets/:id', PlanetController.delete);

// Satellite Routes

app.post('/planets/:planetId/satellites', SatelliteController.store);
app.get ('/planets/:planetId/satellites', SatelliteController.index);

// Cap Routes

app.post('/cap', CapController.store);
app.get('/cap', CapController.index);

// Spaceship Routes

app.post('/caps/:capId/spaceships', SpaceshipController.store);
app.get('/caps/:capId/spaceships', SpaceshipController.index);









module.exports = app;

