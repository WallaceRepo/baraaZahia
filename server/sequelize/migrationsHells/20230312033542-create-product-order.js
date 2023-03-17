'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductOrders', {
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {       
          model: {
            tableName: 'Products',
           },
          key: 'id'
         }
        },
      order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {       
          model: {
            tableName: 'Orders',
           },
          key: 'id'
        }
      },
      product_unit: {
        type: Sequelize.STRING
      },
      unit_cost: {
        type: Sequelize.FLOAT
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      total_cost: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('ProductOrders');
  }
};