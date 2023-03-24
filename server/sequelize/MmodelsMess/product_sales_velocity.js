'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Sales_Velocity extends Model {
   
    static associate(models) {
      // define association here
      this.hasMany(models.Inventory);
    }
  }
  Product_Sales_Velocity.init({
    product_sales_velocity: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      },
    }, {
    sequelize,
    modelName: 'Product_Sales_Velocity',
    underscored:true,
  });
  return Product_Sales_Velocity;
};