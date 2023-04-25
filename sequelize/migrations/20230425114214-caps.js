'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('caps', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      registerNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }

    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('caps');

  }
};
