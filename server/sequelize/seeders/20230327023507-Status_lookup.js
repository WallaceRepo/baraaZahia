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
   await queryInterface.bulkInsert(
    "Status_lookups",[
      { 
        name:"Order Pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        name:"Order Approved",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        name:"Order Canceled",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        name:"Order Refunded",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        name:"Product Delivered",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        name:"Product Shipped",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        name:"Product packing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        name:"Order Processing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        name:"Return processing",
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
   await queryInterface.bulkDelete("Status_lookups", null,{})
 }
}

