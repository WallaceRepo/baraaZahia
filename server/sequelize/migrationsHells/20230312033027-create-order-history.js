'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:  {
            tableName: 'Orders',
          },
          key: 'id'
       },
      },
      order_status: {
        type: Sequelize.STRING,
        references: {
          model:  {
            tableName: 'History_Order_Statuses',
          },
          key: 'value'
       },
      },
      last_order_date: {
        type: Sequelize.DATE
      },
      reorder_rules_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:  {
            tableName: 'ReOrder_Rules',
          },
          key: 'id'
       },
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
    await queryInterface.dropTable('Order_Histories');
  }
};