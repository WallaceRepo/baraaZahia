'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductWarehouses', {
      SKU: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName:'Products',
          },
          key:'sku'
        }
      },
      warehouse: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'Warehouses',
          },
          key:'id'
        }
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
      sales_velocity: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName:'Sales_velocity_lookups',
          },
          key:'velocity'
        }
      },
      reorder_rules: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'ReOrder_rules',
          },
          key:'id'
        }
      },
      out_of_stock_detail: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ProductWarehouses');
  }
};