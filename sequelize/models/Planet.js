//sequelize : é o objeto que contém os métodos para criar tabelas, inserir dados, etc.

const {DataTypes} = require('sequelize'); // Importa o DataTypes do sequelize. o que é o dataTypes? é um objeto que contém os tipos de dados que o sequelize suporta. ex: DataTypes.STRING, DataTypes.INTEGER, DataTypes.BOOLEAN, etc.

// Importa o sequelize.js que está dentro da pasta config.

const sequelize = require('../config/sequelize'); // Importa a conexão com o banco de dados. Como? através do arquivo sequelize.js que está dentro da pasta config.


// Define o modelo do planeta. O método define() cria uma tabela no banco de dados. O primeiro parâmetro é o nome da tabela, e o segundo parâmetro é um objeto que contém os campos da tabela. O método define() retorna um objeto que contém os métodos para criar, ler, atualizar e deletar dados da tabela.

const Planet = sequelize.define('planets', { 
    name : DataTypes.STRING,
    position : DataTypes.INTEGER,
} );

module.exports = Planet;