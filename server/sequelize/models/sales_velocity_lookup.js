'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales_velocity_lookup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   
    static associate(models) {
      // define association here
      this.hasMany(models.ProductWarehouse, { foreignKey: 'velocity'}) 
    }
  }
  Sales_velocity_lookup.init({
    velocity: {
      type: DataTypes.STRING,
      primaryKey:true,
      unique:true
    }
  }, {
    sequelize,
    modelName: 'Sales_velocity_lookup',
    timestamps:false
  });
  return Sales_velocity_lookup;
};