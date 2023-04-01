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
      this.belongsToMany(models.Order, {through: models.OrderDetail, uniqueKey:'sku'})
      this.belongsToMany(models.Warehouse, {through: models.ProductWarehouse, uniqueKey: 'sku'})
      this.belongsTo(models.Category, { foreignKey: 'category' })
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
    unit:  DataTypes.STRING,
    category: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName:'Categories',
        },
        key:'category' 
       }
    }  
  }, {
    sequelize,
    modelName: 'Product',
    timestamps:false
  });
  return Product;
};