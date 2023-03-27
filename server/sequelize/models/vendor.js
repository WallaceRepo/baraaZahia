'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order);
    }
  }
 Vendor.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    
    },
    full_name: DataTypes.STRING,
    job_title:DataTypes.STRING,
    email: DataTypes.STRING,
    direct_dial:DataTypes.STRING,
    company: DataTypes.STRING,
    location:DataTypes.STRING,
    web_site:DataTypes.STRING,
  }, {
    sequelize,
    modelName:  'Vendor',
  });
  return Vendor;
};