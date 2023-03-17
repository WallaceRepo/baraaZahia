'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {

    static associate(models) {
      // define association here
  
      this.belongsTo(models.Product,{foreignKey:'id', as: 'Product_id'})
    }
  }
  Image.init({
    product_id: {
      type: DataTypes.BIGINT,
    },
    alt_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
    underscored:true,
  });
  return Image;
};