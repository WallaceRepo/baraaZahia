  'use strict';
  /** @type {import('sequelize-cli').Migration} */
  module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Manufacturers', {
        company: {
          type: Sequelize.STRING,
          primaryKey: true,
          unique:true,
        },
        full_name: {
          type: Sequelize.STRING,
        },
        job_title: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING
        },
        direct_dial: {
          type: Sequelize.STRING,
        },
        location: {
          type: Sequelize.STRING,
        },
        web_site: {
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
      await queryInterface.dropTable('Manufacturers');
    }
  };
  

