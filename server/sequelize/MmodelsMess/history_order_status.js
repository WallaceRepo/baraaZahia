'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History_Order_Status extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Order_History, { as: 'order_status'})
    }
  }
  History_Order_Status.init({
    value: {
      type: DataTypes.STRING,
  
      },
  }, {
    sequelize,
    modelName: 'History_Order_Status',
    underscored:true,
  });
  return History_Order_Status;
};