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
        name:"Ordered",
     
      },
      { 
        name:"Processing",
      
      },
      { 
        name:"Canceled",
       
      
      },
      { 
        name:"Refunded",
       
      },
      { 
        name:"Delivered",
   
      },
      { 
        name:"Shipped",
      
      }

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

