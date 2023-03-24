'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {

    static associate(models) {
      // define association here
      // this.belongsToMany(models.Product)
      // this.belongsToMany(models.WareHouse)

      this.belongsTo(models.ReOrder_Rules)
      this.belongsTo(models.Order_History);

      this.belongsTo(models.Product_Sales_Velocity)
   
    }
}
  Inventory.init({
    product_id: {
      type: DataTypes.INTEGER,
    
    },
    warehouse_id: {
      type: DataTypes.INTEGER,
     
    },
    on_hand: DataTypes.FLOAT,
    safety_stock: DataTypes.FLOAT,
    min_stock_qty: DataTypes.FLOAT,
    max_stock_qty: DataTypes.FLOAT,
    reorder_point: DataTypes.FLOAT,
    delivery_lead_time: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    out_of_stock_explanation: DataTypes.STRING,

    order_history_id: {
    type: DataTypes.INTEGER,
     },
    product_sales_velocity:{
    type: DataTypes.INTEGER,
     },
    reorder_rules_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Inventory',
    underscored:true,
  });
  return Inventory;
};