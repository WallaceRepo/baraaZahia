'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requested_quantity: {
        type: Sequelize.FLOAT
      },
      received_quantity: {
        type: Sequelize.FLOAT
      },
      checked_in: {
        type: Sequelize.STRING
      },
      checked_in_date: {
        type: Sequelize.STRING
      },
      bill_number: {
        type: Sequelize.STRING,
        references: {
          model:{
            tableName:"Payments"
          },
          key: "bill_number"
        }
      },
      sku: {
        type: Sequelize.STRING,
        references: {
          model:{
            tableName:"Products"
          },
          key: "sku"
        }
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:"Orders"
          },
          key: "id"
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
    await queryInterface.dropTable('OrderDetails');
  }
};