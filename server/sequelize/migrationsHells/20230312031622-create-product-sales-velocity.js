'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Sales_Velocities', {
      
      product_sales_velocity: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_Sales_Velocities');
  }
};