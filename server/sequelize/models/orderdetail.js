'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Payment)
      this.belongsTo(models.Order);
      this.belongsTo(models.Product)
    }
  }
  OrderDetail.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    requested_quantity: DataTypes.FLOAT,
    received_quantity: DataTypes.FLOAT,
    checked_in: DataTypes.STRING,
    checked_in_date: DataTypes.STRING,
    bill_number: {
      type:DataTypes.STRING,
      references: {
        model:{
          tableName:"Payments"
        },
        key: "bill_number"
      }
    },
    sku: {
      type: DataTypes.STRING,
      references: {
        model:{
          tableName:"Products"
        },
        key: "sku"
      }
    },
    order_id: {
      type:DataTypes.INTEGER,
      references: {
        model:{
          tableName:"Orders"
        },
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};