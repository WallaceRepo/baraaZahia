'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReOrder_rules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ProductWarehouse)
    }
  }
  ReOrder_rules.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement: true,
    },
    send_email: DataTypes.STRING,
    set_interval_time_screening: DataTypes.STRING,
    reorder_calc_result: DataTypes.STRING,
    other_details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ReOrder_rules',
  });
  return ReOrder_rules;
};