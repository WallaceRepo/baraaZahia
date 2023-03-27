'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product)
    }
  }
  Unit.init({
    unit_name: {
      type:DataTypes.STRING,
      unique:true,
      primaryKey:true,
    }
  }, {
    sequelize,
    modelName: 'Unit',
  });
  return Unit;
};