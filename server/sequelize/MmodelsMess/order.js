'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ProductOrder);
      this.hasMany(models.Order_History)
      this.belongsTo(models.WareHouse)
      this.belongsTo(models.Order_Status)
      this.belongsTo(models.Vendor)
    }
  }
  Order.init({
    order_date: DataTypes.DATE,
    vendor_id: {
      type: DataTypes.INTEGER,
      },
    warehouse_id: 
    { type: DataTypes.INTEGER,
      },
    order_status: {
      type: DataTypes.INTEGER,
     },
    payment_method: DataTypes.STRING,
    total_order_cost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
    underscored:true,
  });
  return Order;
};