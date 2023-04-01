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
    await queryInterface.bulkInsert("ProductWarehouses",[
      { sku:"simple66",
        warehouse:"PHX3",
        on_hand: 34,
        safety_stock:8,
        min_stock_qty:3,
        max_stock_qty:56,
        sales_velocity:'slow moving',
        reorder_rules: 1,
        out_of_stock_detail:"instock",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { sku:"simple66",
        warehouse:"OAK4",
        on_hand: 20,
        safety_stock:4,
        min_stock_qty:3,
        max_stock_qty:45,
        sales_velocity:'slow moving',
        reorder_rules: 2,
        out_of_stock_detail:"instock",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { sku:"simple66",
      warehouse:"SLC1",
      on_hand: 34,
      safety_stock:8,
      min_stock_qty:3,
      max_stock_qty:56,
      sales_velocity:'slow moving',
      reorder_rules: 3,
      out_of_stock_detail:"instock",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { sku:"simple66",
        warehouse:"PHL1",
        on_hand: 34,
        safety_stock:8,
        min_stock_qty:3,
        max_stock_qty:56,
        sales_velocity:'slow moving',
        reorder_rules: 1,
        out_of_stock_detail:"instock",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { sku:"simple66",
      warehouse:"JAX3",
      on_hand: 34,
      safety_stock:8,
      min_stock_qty:3,
      max_stock_qty:56,
      sales_velocity:'slow moving',
      reorder_rules: 2,
      out_of_stock_detail:"instock",
      createdAt: new Date(),
      updatedAt: new Date(),
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
    await queryInterface.bulkDelete("ProductWarehouses", null,{})
  }
};
