'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Inventory);
      this.belongsTo(models.Order)
      this.belongsTo(models.ReOrder_rules)
      this.belongsTo(models.History_Order_Status)
     }
  }
  Order_History.init({
    order_id: {
      type: DataTypes.INTEGER,
    },
    order_status: {
      type: DataTypes.STRING,
      
    },
    last_order_date: DataTypes.DATE,
    reorder_rules_id: {
      type: DataTypes.INTEGER,
     }
  }, {
    sequelize,
    modelName: 'Order_History',
    underscored:true,
  });
  return Order_History;
};