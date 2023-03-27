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
      this.belongsToMany(models.Product, { through: models.ProductWarehouse});
      this.belongsTo(models.Order);
    }
  }
  Warehouse.init({
    id: {
    primaryKey:true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    },
    company: DataTypes.STRING,
    warehouse_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    manager_name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
  return Warehouse;
};