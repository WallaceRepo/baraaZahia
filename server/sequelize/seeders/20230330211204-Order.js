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
    await queryInterface.bulkInsert("Orders",[{
      date_of_order: "2022-12-01",
      vendor_id: 1,
      order_details: "20 units of product A",
      status: "Ordered",
      delivery_lead_time: "3 days",
      warehouse: "PHL1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      date_of_order: "2022-12-05",
      vendor_id: 2,
      order_details: "50 units of product B",
      status: "Processing",
      delivery_lead_time: "5 days",
      warehouse: "JAX3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      date_of_order: "2022-12-10",
      vendor_id: 3,
      order_details: "10 units of product C",
      status: "Delivered",
      delivery_lead_time: "2 days",
      warehouse: "SLC1",
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
    await queryInterface.bulkDelete("Orders", null,{})
  }
};
