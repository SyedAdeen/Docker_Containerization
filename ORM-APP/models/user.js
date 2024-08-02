'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.UserCar, { foreignKey: 'username' });
      User.hasMany(models.City, { foreignKey: 'userId' });

    }
  }
  User.init({
    username: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
