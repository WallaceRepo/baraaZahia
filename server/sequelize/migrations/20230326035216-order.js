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
      date_of_order: {
        type: Sequelize.DATE
      },
      vendor_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{ 
            tableName:'Vendors'
          },
          key:"id"

        }
      },
      order_details: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING,
        references:{
          model:{ 
            tableName:'Status_lookups'
          },
          key:"name"

        }
      },
      delivery_lead_time: {
        type: Sequelize.STRING
      },
      warehouse: {
        type: Sequelize.INTEGER,
        references:{
          model:{ 
            tableName:'Warehouses'
          },
          key:"id"

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
    await queryInterface.dropTable('Orders');
  }
};