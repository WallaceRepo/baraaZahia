'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {foreignKey: 'product_id'})
      this.belongsTo(models.Manufacturer)
    }
  }
  Brand.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    manufacturer_id:{ 
       type: DataTypes.INTEGER, 
       refetences: {
       model: 'Manufacturer',
       key:'id' 
       }
     }
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};