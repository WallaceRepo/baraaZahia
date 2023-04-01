'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_lookup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, { foreignKey: 'name'})
    }
  }
  Status_lookup.init({
    name: {
      type:DataTypes.STRING,
      primaryKey:true,
      unique:true
    }

  }, {
    sequelize,
    modelName: 'Status_lookup',
    timestamps:false
  });
  return Status_lookup;
};