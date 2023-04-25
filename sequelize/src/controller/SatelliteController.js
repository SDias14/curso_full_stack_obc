const Satellite = require('../models/Satellite');
const Planet = require('../models/Planet');

module.exports = {

    async store(req, res) {
        const {planetId} = req.params;
        const {name, serialNumber} = req.body;

        const planet = await Planet.findByPk(planetId);

        if(!planet) {
            return res.status(400).json({error: 'Planet not found'});
        }else{
            const satellite = await Satellite.create({name, serialNumber, planetId});
            return res.json(satellite);
        }
    }, 

    async index(req, res) {
        const {planetId} = await req.params;

        if(!planetId) {
            return res.status(400).json({error: 'Planet not found'});
        }else{
            const planet = await Planet.findByPk(planetId, {
                include: Satellite,
            });

            return res.json(planet);
        }
        
    }
}
