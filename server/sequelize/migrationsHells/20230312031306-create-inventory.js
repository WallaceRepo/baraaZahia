'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inventories', {
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model:  {
            tableName: 'Products',
            },
          key: 'id'
         },
       },
      warehouse_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model:  {
            tableName: 'WareHouses',
            },
          key: 'id'
         },
      },
      on_hand: {
        type: Sequelize.FLOAT
      },
      safety_stock: {
        type: Sequelize.FLOAT
      },
      min_stock_qty: {
        type: Sequelize.FLOAT
      },
      max_stock_qty: {
        type: Sequelize.FLOAT
      },
      reorder_point: {
        type: Sequelize.FLOAT
      },
      delivery_lead_time: {
        type: Sequelize.FLOAT
      },
      currency: {
        type: Sequelize.STRING
      },
      out_of_stock_explanation: {
        type: Sequelize.STRING
      },
      order_history_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:  {
            tableName: 'Order_Histories',
            },
          key: 'id'
         },
       },
      product_sales_velocity: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
          model:  {
            tableName: 'Product_Sales_Velocities',
            },
          key: 'product_sales_velocity'
         },
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
    await queryInterface.dropTable('Inventories');
  }
};