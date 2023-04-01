'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Vendor, {targetforeignKey: 'id'})
      this.belongsTo(models.Status_lookup, { foreignKey: 'name'})
      this.belongsToMany(models.Product, { through: models.OrderDetail, uniqueKey:'sku'})
      this.belongsTo(models.Warehouse, { foreignKey: 'warehouse_name'} )
    }
  }
  Order.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement: true,
    },
    date_of_order: DataTypes.DATE,
    vendor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName:'Vendors'
        },
        key:"id"
      }
    },
    order_details: DataTypes.STRING,
    status: {
      type:DataTypes.STRING,
      references:{
        model:{
          tableName:'Status_lookups',
         },
         key:'name'
      }
    },
    delivery_lead_time: DataTypes.STRING,
    warehouse:{
      type: DataTypes.STRING,
      references: {
        model:{
          tableName:'Warehouses'
        },
        key:"warehouse_name"
      }
    }

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};