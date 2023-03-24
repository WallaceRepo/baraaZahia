'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Brands', {
   
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      manufacturer: {
        type: Sequelize.STRING,
        references: {
           model:  {
             tableName: 'Manufacturers',
            
            },
           key: 'name'
        },
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Brands');
  }
};