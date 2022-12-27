'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Menus', {
      id: {
        type         : Sequelize.INTEGER,
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true
      },
      uid : {
        type        : Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull   : false,
      },
      name : {
        type        : Sequelize.STRING,
        allowNull   : false,
      },
      created_at : {
        type        : 'TIMESTAMP',
        allowNull   : false,
      },
      updated_at : {
        type        : 'TIMESTAMP',
        allowNull   : false,
      },
      deleted_at : {
        type        : 'TIMESTAMP',
        allowNull   : true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Menus');
  }
};