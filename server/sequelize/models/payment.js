'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.OrderDetail, {foreignKey: 'bill_number'})
    }
  }
  Payment.init({
    bill_number: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique:true,
    },
    payment_type:DataTypes.STRING, 
    other_details:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Payment',
    timestamps:false
  });
  return Payment;
};