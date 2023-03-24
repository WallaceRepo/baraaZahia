'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order)
    }
  }
  Vendor.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    other_details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendor',
    underscored:true,
  });
  return Vendor;
};