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
    await queryInterface.bulkInsert("Categories",[
      { 
         category: "Arts, Crafts & Sewing",
         
      },
      { 
        category: "Automotive Parts & Accessories",
       
     },
     { 
      category: "Baby",
      
   },
   { 
    category: "Beauty & Personal Care",
   
 },
 { 
  category: "Books, Magazines & Newspaper",
 
},   { 
  category: "Camera & Photo",
  
},
{ 
  category: "Cell Phones & Accessories",
  
},
{ 
  category: "Clothing, Shoes & Jewelry",
  
},  { 
  category: "Computers & Accessories",
  
},{ 
  category: "Electronics",

},   { 
  category: "Exersize/Fitness Supplies",
 
},  { 
  category: "Groceries & Gourmet Food",
 
},   { 
  category: "Home & kitchen",
 
},     { 
  category: "Health & Household",
  
},    { 
  category: "Industrial & Scientific",
  
},   { 
  category: "Kitchen & Dining",

},  { 
  category: "Office Products",
 
},   { 
  category: "Patio, Lawn & Garden",
 
},   { 
  category: "Pet Supplies",
 
},     { 
  category: "Tools & Home Improvement",
 
}, { 
  category: "Toys & Games",
 
},   { 
  category: "Watches",
  
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
    await queryInterface.bulkDelete("Categories", null,{})
  }
};
