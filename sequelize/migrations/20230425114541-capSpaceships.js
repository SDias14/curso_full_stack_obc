'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('capSpaceships', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      
      capId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'caps', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      spaceshipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'spaceships', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
   
  }
};
