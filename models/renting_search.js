'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class renting_search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      renting_search.belongsTo(models.Users,{foreignKey:{allowNull:false}})

    }
  };
  renting_search.init({
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    type_property: DataTypes.STRING,
    From_price: DataTypes.INTEGER,
    Until_Price: DataTypes.INTEGER,
    From_square_meters: DataTypes.INTEGER,
    Until_square_meters: DataTypes.INTEGER,
    available_immediately: DataTypes.STRING,
    from_floor: DataTypes.INTEGER,
    Until_floor: DataTypes.INTEGER,
    From_num_rooms: DataTypes.INTEGER,
    Until_num_rooms: DataTypes.INTEGER,
    free_text: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    air_conditioning: DataTypes.STRING,
    elevator: DataTypes.STRING,
    parking: DataTypes.STRING,
    terrace: DataTypes.STRING,
    sun_Terrace: DataTypes.STRING,
    renovated: DataTypes.STRING,
    furnished_and_equipped: DataTypes.STRING,
    bars: DataTypes.STRING,
    accessibility: DataTypes.STRING,
    Yard: DataTypes.STRING,
    MMD_room: DataTypes.STRING,
    architectural_Design: DataTypes.STRING,
    new_property: DataTypes.STRING,
    Storage: DataTypes.STRING,
    close_to_public_transportation: DataTypes.STRING,
    close_to_kindergartens: DataTypes.STRING,
    close_to_train: DataTypes.STRING,
    close_to_shopping_center: DataTypes.STRING,
    near_the_sea: DataTypes.STRING,
    close_to_hospital: DataTypes.STRING,
    close_to_school: DataTypes.STRING,
    close_to_airport: DataTypes.STRING,
    secure_area: DataTypes.STRING,
    quiet_area: DataTypes.STRING,
    Master_unit: DataTypes.STRING,
    equipped_kitchen: DataTypes.STRING,
    Jacuzzi: DataTypes.STRING,
    parquet: DataTypes.STRING,
    Guard_in_the_building: DataTypes.STRING,
    Security_Cameras: DataTypes.STRING,
    Swimming_pool: DataTypes.STRING,
    Gym_in_the_building: DataTypes.STRING,
    Bicycle_room: DataTypes.STRING,
    Water_heating_on_gas: DataTypes.STRING,
    underground_parking_lot: DataTypes.STRING,
    High_ceiling:DataTypes.STRING,
    view_of_park:DataTypes.STRING,
    close_to_gym:DataTypes.STRING,
    close_to_HM:DataTypes.STRING,
    close_to_park:DataTypes.STRING,
    Irrigation_system:DataTypes.STRING,
    anotherPhone:DataTypes.INTEGER,
    short_range:DataTypes.STRING,
    Long_range:DataTypes.STRING,
    Number_of_payments:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'renting_search',
  });
  return renting_search;
};