'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales_velocity_lookups', {
      velocity: {
        primaryKey: true,
        type: Sequelize.STRING,
        unique:true
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales_velocity_lookups');
  }
};