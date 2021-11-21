'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('advertising_rentings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      type_property: {
        type: Sequelize.STRING
      },
      apartment_num: {
        type: Sequelize.INTEGER
      },
      rooms_numbers: {
        type: Sequelize.INTEGER
      },
      property_size: {
        type: Sequelize.INTEGER
      },
      available_immediately: {
        type: Sequelize.BOOLEAN
      },
      entry_date: {
        type: Sequelize.DATE
      },
      floor: {
        type: Sequelize.INTEGER
      },
      total_floors: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      Number_of_payments: {
        type: Sequelize.INTEGER
      },
      property_tax: {
        type: Sequelize.INTEGER
      },
      home_vaad: {
        type: Sequelize.INTEGER
      },
      notSaturday: {
        type: Sequelize.BOOLEAN
      },
      free_text: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      anotherPhone: {
        type: Sequelize.INTEGER
      },
      air_conditioning: {
        type: Sequelize.BOOLEAN
      },
      elevator: {
        type: Sequelize.BOOLEAN
      },
      parking: {
        type: Sequelize.BOOLEAN
      },
      terrace: {
        type: Sequelize.BOOLEAN
      },
      sun_Terrace: {
        type: Sequelize.BOOLEAN
      },
      renovated: {
        type: Sequelize.BOOLEAN
      },
      furnished_and_equipped: {
        type: Sequelize.BOOLEAN
      },
      bars: {
        type: Sequelize.BOOLEAN
      },
      accessibility: {
        type: Sequelize.BOOLEAN
      },
      Yard: {
        type: Sequelize.BOOLEAN
      },
      MMD_room: {
        type: Sequelize.BOOLEAN
      },
      architectural_Design: {
        type: Sequelize.BOOLEAN
      },
      new_property: {
        type: Sequelize.BOOLEAN
      },
      Storage: {
        type: Sequelize.BOOLEAN
      },
      long_term: {
        type: Sequelize.BOOLEAN
      },
      small_term: {
        type: Sequelize.BOOLEAN
      },
      close_to_public_transportation: {
        type: Sequelize.BOOLEAN
      },
      close_to_kindergartens: {
        type: Sequelize.BOOLEAN
      },
      close_to_train: {
        type: Sequelize.BOOLEAN
      },
      close_to_shopping_center: {
        type: Sequelize.BOOLEAN
      },
      near_the_sea: {
        type: Sequelize.BOOLEAN
      },
      close_to_hospital: {
        type: Sequelize.BOOLEAN
      },
      close_to_school: {
        type: Sequelize.BOOLEAN
      },
      close_to_airport: {
        type: Sequelize.BOOLEAN
      },
      secure_area: {
        type: Sequelize.BOOLEAN
      },
      quiet_area: {
        type: Sequelize.BOOLEAN
      },
      Master_unit: {
        type: Sequelize.BOOLEAN
      },
      equipped_kitchen: {
        type: Sequelize.BOOLEAN
      },
      Jacuzzi: {
        type: Sequelize.BOOLEAN
      },
      parquet: {
        type: Sequelize.BOOLEAN
      },
      Guard_in_the_building: {
        type: Sequelize.BOOLEAN
      },
      Security_Cameras: {
        type: Sequelize.BOOLEAN
      },
      Swimming_pool: {
        type: Sequelize.BOOLEAN
      },
      Gym_in_the_building: {
        type: Sequelize.BOOLEAN
      },
      Bicycle_room: {
        type: Sequelize.BOOLEAN
      },
      Water_heating_on_gas: {
        type: Sequelize.BOOLEAN
      },
      underground_parking_lot: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    // await queryInterface.dropTable('advertising_rentings');
  }
};