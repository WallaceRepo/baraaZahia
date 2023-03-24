'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    
    static associate(models) {
      // define association here
      
    }
  }
  ProductOrder.init({
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {       
        model: 'Porduct', // ordder_history hasMany order 1:m
        key: 'id'
       }
      },
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {       
        model: 'Order', // ordder_history hasMany order 1:m
        key: 'id'
      }
    },
    product_unit: DataTypes.STRING,
    unit_cost: DataTypes.FLOAT,
    quantity: DataTypes.FLOAT,
    total_cost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ProductOrder',
    underscored:true,
  });
  return ProductOrder;
};