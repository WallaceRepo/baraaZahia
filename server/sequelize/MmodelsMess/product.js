'use strict';
const {Model} = require('sequelize');
const inventory = require('./inventory');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ProductOrder)
      this.belongsToMany(models.WareHouse, {through: models.Inventory})
      this.hasMany(models.Image);
      this.belongsTo(models.Brand,{foreignKey:'name', as: 'brand_name'})
      this.belongsTo(models.Category,{foreignKey:'category_name', as: 'category_name'})
    
    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    sku:{
      type:DataTypes.STRING,
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING,
     
    },
    image_url: {
      type:DataTypes.STRING,
      },
    price: {
      type:DataTypes.FLOAT, 
      allowNull: false
    },
    category_name: {
      type:DataTypes.STRING,
     }
  }, {
    sequelize,
    modelName: 'Product',
    underscored:true,
   });
  return Product;
};