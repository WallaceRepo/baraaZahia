'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vendors', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendors');
  }
};
  

