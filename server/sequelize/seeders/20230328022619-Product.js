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
    await queryInterface.bulkInsert("Products",[
      {  sku:"simple66",
         barcode:"1234567",
         image_url:"https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg",
         product_name:"OnePlus 10 Pro, 5G Android Smartphone",
         details:"8GB+128GB, U.S.Triple Camera co-Developed with Hasselblad, Emerald Forest",
         price:"540$",
         unit:"pieces",
         category:"Cell Phones & Accessories",
       
       },
       {  sku:"phone540",
         barcode:"3749292",
         image_url:"https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg",
         product_name:"phone",
         details:"aweomsoem phone",
         price:"700$",
         unit:"pieces",
         category:"Cell Phones & Accessories",
        
       },
       {  sku:"printerJX",
         barcode:"347324",
         image_url:"https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg",
         product_name:"Brother HLL2305W Compact Mono Laser Single Function Printer with Wireless and Mobile Device Printing",
         details:"Laser",
         price:"119.99",
         unit:"pieces",
         category:"Computers & Accessories",
       
       },

    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null,{})
  }
};
