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
    "Sales_velocity_lookups",[ 
      { velocity:"slow moving",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { velocity:"fast moving",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
      {velocity:"non moving",
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
    await queryInterface.bulkDelete("Sales_velocity_lookups", null,{})
  }
};
