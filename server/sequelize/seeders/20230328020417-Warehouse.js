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
   await queryInterface.bulkInsert("Warehouses", [
    { 
       company: "Amazon",
       warehouse_name: "PHX3",
       phone:"+1-567-273-2374",
       email:"warehouse@amazon.com",
       zip_code:"85043",
       address:"6835 West Buckeye Road",
       city:"Phoenix",
       state:"AZ",
       manager_name:"Jane Johnson",
       country:"USA",
      
    },{
      company: "Amazon",
       warehouse_name: "OAK4",
       phone:"+1-567-273-2374",
       email:"warehouse@amazon.com",
       zip_code:"95376",
       address:"1555 N. Chrisman Rd",
       city:"Tracy",
       state:"CA",
       manager_name:"Nancy Bringham",
       country:"USA",
     
    },
    {
      company: "Amazon",
       warehouse_name: "SLC1",
       phone:"+1-567-273-2374",
       email:"warehouse@amazon.com",
       zip_code:"84116",
       address:"777 N 5600 W",
       city:"SALT LAKE CITY",
       state:"UT",
       manager_name:"Amelia Micheal",
       country:"USA",
      
    },
    {
      company: "Amazon",
       warehouse_name: "PHL1",
       phone:"+1-567-273-2374",
       email:"warehouse@amazon.com",
       zip_code:"19720",
       address:"1 Centerpoint Blvd.",
       city:"New Castle",
       state:"DE",
       manager_name:"Cory Cower",
       country:"USA",
      
    },
    {
      company: "Amazon",
       warehouse_name: "JAX3",
       phone:"+1-567-273-2374",
       email:"warehouse@amazon.com",
       zip_code:"32210-8686",
       address:"13333 103rd Street",
       city:"Jacksonville",
       state:"FL",
       manager_name:"Buya Boro",
       country:"USA",
     
    },{
      company: "Amazon",
       warehouse_name: "IND5",
       phone:"+1-567-273-2374",
       email:"warehouse@amazon.com",
       zip_code:"46168",
       address:"800 Perry Road",
       city:"Plainfield",
       state:"IN",
       manager_name:"Blue Reay",
       country:"USA",
     
    },
    {
    company: "Amazon",
     warehouse_name: "TUL1",
     phone:"+1-567-273-2374",
     email:"warehouse@amazon.com",
     zip_code:"67337",
     address:"2654 North Highway 169",
     city:"Coffeyville",
     state:"KS",
     manager_name:"Briggs Conner",
     country:"USA",
    
  },
  {
    company: "Amazon",
     warehouse_name: "HOU3",
     phone:"+1-567-273-2374",
     email:"warehouse@amazon.com",
     zip_code:"77423",
     address:"31555 Highway 90 E",
     city:"Brookshire",
     state:"TX",
     manager_name:"Maryann Shneider",
     country:"USA",
   
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
    await queryInterface.bulkDelete("Warehouses", null,{})
  }
};
