'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReOrder_rules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      send_email: {
        type: Sequelize.STRING
      },
      set_interval_time_screening: {
        type: Sequelize.STRING
      },
      reorder_calc_result: {
        type: Sequelize.STRING
      },
      other_details: {
        type: Sequelize.STRING
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReOrder_rules');
  }
};