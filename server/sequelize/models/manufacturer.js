'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Manufacturer extends Model {
        static associate(models) {
      // define association here
     // this.hasMany(models.Brand)
   }
  }
  Manufacturer.init({
    company_name: {
      primaryKey:true,
      type: DataTypes.STRING
    },
    address: DataTypes.STRING,
   }, {
    sequelize,
    modelName: 'Manufacturer',
    underscored:true,
  });
  return Manufacturer;
};