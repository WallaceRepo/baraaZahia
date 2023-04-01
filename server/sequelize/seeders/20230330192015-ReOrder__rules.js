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
    await queryInterface.bulkInsert("ReOrder_rules", [{
      send_email: "john.doe@example.com",
      set_interval_time_screening: "weekly",
      reorder_calc_result: "2023-04-01",
      other_details: "Priority items",
     
    },{
      send_email: "jane.doe@example.com",
      set_interval_time_screening: "monthly",
      reorder_calc_result: "2023-04-15",
      other_details: "Non-priority items",
     
      
    },
    {
      send_email: "bob.smith@example.com",
      set_interval_time_screening: "daily",
      reorder_calc_result: "2023-03-31",
      other_details: "Urgent items",
      
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
    await queryInterface.bulkDelete("ReOrder_rules", null,{})
  }
};
