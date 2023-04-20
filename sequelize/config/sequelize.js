const Sequelize = require('sequelize'); // Importa o sequelize
const database = require('./config'); // Importa o arquivo de configuração do banco de dados

const sequelize = new Sequelize(database); // HOW IT WORKS: WELL , THE CONST SEQUELIZE IS A NEW INSTANCE OF THE CLASS SEQUELIZE, AND THE CLASS SEQUELIZE NEEDS A PARAMETER, AND THIS PARAMETER IS THE DATABASE CONFIGURATION, SO WE PASS THE DATABASE CONFIGURATION TO THE CLASS SEQUELIZE, AND THE CLASS SEQUELIZE WILL CREATE A NEW CONNECTION WITH THE DATABASE

module.exports = sequelize; // Exporta o sequelize