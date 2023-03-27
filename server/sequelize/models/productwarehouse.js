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
      this.belongsTo(models.Warehouse)
      this.belongsTo(models.Product)
      this.belongsTo(models.ReOrder_rules)
      this.belongsTo(models.Sales_velocity_lookup)
    }
  }
  ProductWarehouse.init({
    SKU: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName:'Products',
        },
        key:'sku'
      }
    },
    warehouse: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName:'Warehouses',
        },
        key:'id'
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