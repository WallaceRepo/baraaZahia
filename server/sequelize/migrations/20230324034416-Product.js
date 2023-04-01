'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      sku: {
        primaryKey: true,
        type: Sequelize.STRING,
        unique:true,
      },
      barcode:{
        type: Sequelize.STRING,
      },
      image_url:{
        type: Sequelize.STRING,
      },
      product_name: {
        type: Sequelize.STRING,
      },
      details:{
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING,
      
      },
      category: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName:'Categories',
          },
          key:'category' 
        }
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};