'use strict';

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
    await queryInterface.bulkInsert("OrderDetails",[
      {
        requested_quantity: 20,
        received_quantity: 20,
        bill_number: "ewyr45386813461",
        sku: "printerJX",
        order_id: 1,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        requested_quantity: 50,
        received_quantity: 45,
        bill_number: "3438247-iu",
        sku: "phone540",
        order_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        requested_quantity: 10,
        received_quantity: 10,
        bill_number: "3438247-iu",
        sku: "phone540",
        order_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("OrderDetails", null,{})
  }
};
