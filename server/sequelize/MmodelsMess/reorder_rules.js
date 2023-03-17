'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReOrder_Rules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Inventory)
      this.hasMany(models.Order_History)
    }
  }
  ReOrder_Rules.init({
    notification_email_address: DataTypes.STRING,
    notification_phone: DataTypes.STRING,
    set_interval_time: DataTypes.STRING,
    last_update_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ReOrder_Rules',
    underscored:true,
  });
  return ReOrder_Rules;
};