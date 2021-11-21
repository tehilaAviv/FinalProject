'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Advertising_sales', {
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
        type: Sequelize.STRING
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
    // await queryInterface.dropTable('Advertising_sales');
  }
};

