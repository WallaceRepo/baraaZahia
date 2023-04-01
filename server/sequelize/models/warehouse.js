'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Product, { through: models.ProductWarehouse, uniqueKey: "warehouse_name"});
      this.belongsTo(models.Order, { foreignKey:'warehouse_name'});
    }
  }
  Warehouse.init({
    warehouse_name: {
    primaryKey:true,
    type: DataTypes.STRING,
    unique:true
    },
    company: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    address: DataTypes.STRING,
    city:DataTypes.STRING,
    state: DataTypes.STRING,
    manager_name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Warehouse',
    timestamps:false
  });
  return Warehouse;
};