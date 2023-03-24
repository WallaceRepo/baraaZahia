'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
  
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {foreignKey: 'product_id', as:"product_id"})
      this.belongsTo(models.Manufacturer)
    }
  }
  Brand.init(
     {brand_name:{
        primaryKey:true,
        type: DataTypes.STRING 
     },
      manufacturer: DataTypes.STRING,
     },
    {
      sequelize,
      modelName: 'Brand',
      underscored:true,
    }
  )
  return Brand
}
