'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      alt_name: {
        type: Sequelize.STRING
      },
      product_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {       
          model: {
            tableName: 'Products',
          },
          key: 'id'
        }
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
    await queryInterface.dropTable('Images');
  }
};