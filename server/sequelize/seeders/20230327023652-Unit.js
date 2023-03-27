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
      "Units",[
        {
          unit_name:"gallons",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_name:"unit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_name:"carton",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_name:"pallet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_name:"pieces",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_name:"feet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_name:"pounds",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_name:"pairs",
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
    await queryInterface.bulkDelete("Units", null,{})
  }
};
