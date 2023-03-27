'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Order, {through: models.OrderDetail})
      this.belongsToMany(models.Warehouse, {through: models.ProductWarehouse})
      this.belongsTo(models.Unit)
      this.belongsTo(models.Category)
    }
  }
  Product.init({
    sku: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique:true,
    },   
    barcode: DataTypes.STRING,
    image_url:  DataTypes.STRING,
    product_name: DataTypes.STRING,
    details: DataTypes.STRING,
    price: DataTypes.STRING,
    unit: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName:'Units',
        },
        key:'unit_name' 
      }
    },
    category_name: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName:'Categories',
        },
        key:'category_name' 
       }
    }  
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};