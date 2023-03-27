'use strict';

const payment = require('../models/payment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(
    "Payments",[{
        bill_number: "ewyr45386813461",
        payment_type:"credit_card",
        other_details: "James Anderson, Office supplies, Inc",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
     {
      bill_number: "3438247-iu",
      payment_type:"credit_card",
      other_details: "Mary Jones, Petco, Inc",
      createdAt: new Date(),
      updatedAt: new Date(),
   },
  ]
   )
  },
  
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Payments", null,{})
  }
};
