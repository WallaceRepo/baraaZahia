'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.DATE
      },
      vendor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Vendors',
           },
          key: 'id'
        }
      },
      warehouse_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'WareHouses',
           },
          key: 'id'
        }
      },
      order_status: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'Order_Statuses',
           },
          key: 'value'
        }
      },
      payment_method: {
        type: Sequelize.STRING
      },
      total_order_cost: {
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
    await queryInterface.dropTable('Orders');
  }
};