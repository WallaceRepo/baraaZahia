'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand_name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {       
          model: {
            tableName: 'Brands',
           },
          key: 'name'
        }
      },
       price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      category_name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {       
          model: {
            tableName: 'Categories',
          },
          key: 'category_name'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};