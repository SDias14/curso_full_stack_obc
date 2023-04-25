const {DataTypes} = require('sequelize');

const sequelize = require('../../config/sequelize');

const Satellite = sequelize.define('satellites', {
    name: DataTypes.STRING,
    serialNumber: DataTypes.STRING,
    planetId: DataTypes.INTEGER
});

module.exports = Satellite;