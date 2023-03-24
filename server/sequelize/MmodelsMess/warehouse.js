'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WareHouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Product, {through: models.Inventory})
      this.hasMany(models.Order)
    }
  }
  WareHouse.init({
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    manager_name: DataTypes.STRING,
    warehouse_name:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'WareHouse',
    underscored:true,
  });
  return WareHouse;
};