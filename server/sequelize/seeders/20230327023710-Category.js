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
         category_name: "Arts, Crafts & Sewing",
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      { 
        category_name: "Automotive Parts & Accessories",
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     { 
      category_name: "Baby",
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   { 
    category_name: "Beauty & Personal Care",
    createdAt: new Date(),
    updatedAt: new Date(),
 },
 { 
  category_name: "Books, Magazines & Newspaper",
  createdAt: new Date(),
  updatedAt: new Date(),
},   { 
  category_name: "Camera & Photo",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{ 
  category_name: "Cell Phones & Accessories",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{ 
  category_name: "Clothing, Shoes & Jewelry",
  createdAt: new Date(),
  updatedAt: new Date(),
},  { 
  category_name: "Computers & Accessories",
  createdAt: new Date(),
  updatedAt: new Date(),
},{ 
  category_name: "Electronics",
  createdAt: new Date(),
  updatedAt: new Date(),
},   { 
  category_name: "Exersize/Fitness Supplies",
  createdAt: new Date(),
  updatedAt: new Date(),
},  { 
  category_name: "Groceries & Gourmet Food",
  createdAt: new Date(),
  updatedAt: new Date(),
},   { 
  category_name: "Home & kitchen",
  createdAt: new Date(),
  updatedAt: new Date(),
},     { 
  category_name: "Health & Household",
  createdAt: new Date(),
  updatedAt: new Date(),
},    { 
  category_name: "Industrial & Scientific",
  createdAt: new Date(),
  updatedAt: new Date(),
},   { 
  category_name: "Kitchen & Dining",
  createdAt: new Date(),
  updatedAt: new Date(),
},  { 
  category_name: "Office Products",
  createdAt: new Date(),
  updatedAt: new Date(),
},   { 
  category_name: "Patio, Lawn & Garden",
  createdAt: new Date(),
  updatedAt: new Date(),
},   { 
  category_name: "Pet Supplies",
  createdAt: new Date(),
  updatedAt: new Date(),
},     { 
  category_name: "Tools & Home Improvement",
  createdAt: new Date(),
  updatedAt: new Date(),
}, { 
  category_name: "Toys & Games",
  createdAt: new Date(),
  updatedAt: new Date(),
},   { 
  category_name: "Watches",
  createdAt: new Date(),
  updatedAt: new Date(),
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
