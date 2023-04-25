'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('satellites', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      serialNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      planetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'planets',key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true
        }

      }

    );
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('satellites');
    
  }
};
