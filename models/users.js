'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.advertising_renting,{onDelete:"cascade"});
      Users.hasMany(models.Advertising_sale,{onDelete:"cascade"});
      Users.hasMany(models.renting_search,{onDelete:"cascade"});
      Users.hasMany(models.Sale_search,{onDelete:"cascade"});

      // define association here
    }
  };
  Users.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    birthDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
