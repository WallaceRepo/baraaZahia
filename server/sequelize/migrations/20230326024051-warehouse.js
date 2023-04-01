'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Warehouses', {
      warehouse_name: {
        primaryKey: true,
        type: Sequelize.STRING,
        unique:true
      },
      company: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      manager_name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Warehouses');
  }
};