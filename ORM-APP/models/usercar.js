'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserCar.belongsTo(models.User, { foreignKey: 'username' });
    }
  }
  UserCar.init({
    username: DataTypes.STRING,
    car: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserCar',
  });
  return UserCar;
};


