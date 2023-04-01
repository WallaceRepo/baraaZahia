'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      bill_number:{
        type: Sequelize.STRING,
        primaryKey: true,
        unique:true,
       },
      payment_type:{
        type:Sequelize.STRING
      }, 
      other_details:{
        type: Sequelize.STRING
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};