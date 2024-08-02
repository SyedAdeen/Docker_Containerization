'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // Define association with User
      City.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  City.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Referencing the Users table
        key: 'id'
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'City',
  });

  return City;
};
