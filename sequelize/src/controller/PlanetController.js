const Planet = require('../models/Planet');

module.exports = {

    async store(req, res) {
        //getting the name and position from the request body
        const {name, position} = req.body;

        //adding a new planet to the database
        const planet = await Planet.create({name, position});
        return res.json(planet);

    },

    async index(req, res) {
        //getting all the planets from the database
        const planets = await Planet.findAll();
        return res.json(planets);

    },

    async show(req, res) {
        //getting the id from the request params
        const {id} = req.params;

        //getting the planet from the database
        const planet = await Planet.findByPk(id);
        return res.json(planet);
    },

    async update(req, res) {
        //getting the id from the request params
        const {id} = req.params;

        //getting the name and position from the request body

        const {name, position} = req.body;

        //getting the planet from the database

        const planet = await Planet.findByPk(id);

        //updating the planet

        planet.name = name;
        planet.position = position;

        //saving the planet in the database

        await planet.save();

        return res.json(planet);


    }, 

    async delete(req, res) {
        //getting the id from the request params
        const {id} = req.params;

        //getting the planet from the database
        const planet = await Planet.findByPk(id);

        //deleting the planet from the database
        await planet.destroy();

        return res.send('Planet deleted');
    }


}


    
    