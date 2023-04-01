'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductWarehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Warehouse, { foreignKey: 'warehouse_name'})
      this.belongsTo(models.Product, { foreignKey: 'sku'})
      this.belongsTo(models.ReOrder_rules,{ targetKey: 'set_interval_time_screening', foreignKey: 'id'})
      this.belongsTo(models.Sales_velocity_lookup,{ foreignKey: 'velocity'})
    }
  }
  ProductWarehouse.init({
    sku: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName:'Products',
        },
        key:'sku'
      }
    },
    warehouse: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName:'Warehouses',
        },
        key:'warehouse_name'
      }
    },
    
    on_hand: DataTypes.FLOAT,
    safety_stock: DataTypes.FLOAT,
    min_stock_qty: DataTypes.FLOAT,
    max_stock_qty: DataTypes.FLOAT,
    sales_velocity: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName:'Sales_velocity_lookups',
        },
        key:'velocity'
      }
    },
    reorder_rules: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName:'ReOrder_rules',
        },
        key:'id'
      }
    },    
    out_of_stock_detail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductWarehouse',

  });
  return ProductWarehouse;
};