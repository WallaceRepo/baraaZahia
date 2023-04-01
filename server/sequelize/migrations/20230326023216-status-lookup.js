'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Status_lookups', {
      name: {
        type: Sequelize.STRING,
        primaryKey:true,
        unique:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Status_lookups');
  }
};