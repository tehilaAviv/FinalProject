var express = require('express');
var router = express.Router();
var data = {};
const {Op} = require('sequelize');
const {Sequelize} = require('sequelize');
const db = require("../models/");


//============================ מכירה ==========================
var listToFill = {
    "address_as": "",
    "type_property_as": "", "apartment_num_as": "",
    "floor_as": "", "total_floors_as": "",
    "property_size_as": "", "rooms_numbers_as": "",
    "available_immediately_as": "checked",
    "entry_date_as": "",
    "price_as": "",
    "property_tax_as": "",
    "home_vaad_as": "",
    "name_as": "",
    "email_as": "",
    "phone_as": "",
    "free_text_as": "",
    "air_conditioning_as": "",
    "sun_Terrace_as":"",
    "terrace_as":"",
    "Yard_as": "",
    "elevator_as": "",
    "renovated_as": "",
    "bars_as": "",
    "parking_as": "",
    "MMD_room_as": "",
    "architectural_Design_as": "",
    "Storage_as": "",
    "furnished_and_equipped_as": "",
    "accessibility_as": "",
    "High_ceiling_as": "",
    "new_property_as": "",
    "quiet_area_as": "",
    "close_to_kindergartens_as": "",
    "secure_area_as": "",
    "close_to_train_as": "",
    "view_of_park_as": "",
    "close_to_gym_as": "",
    "close_to_hospital_as": "",
    "close_to_shopping_center_as": "",
    "close_to_park_as": "",
    "close_to_HM_as": "",
    "close_to_public_transportation_as": "",
    "close_to_airport_as": "",
    "close_to_school_as": "",
    "near_the_sea_as": "",
    "Master_unit_as": "",
    "Jacuzzi_as": "",
    "Swimming_pool_as": "",
    "Water_heating_on_gas_as": "",
    "Guard_in_the_building_as": "",
    "underground_parking_lot_as": "",
    "parquet_as": "",
    "equipped_kitchen_as": "",
    "Bicycle_room_as": "",
    "Security_Cameras_as": "",
    "Irrigation_system_as": "",
    "Aid":""
}
var type=  {"1":"דירה",
    "2":"דירת גן",
    "3":"וילה",
    "4":"גג/פנטהוז",
    "5":"דופלקס",
    "6":"טריפלקס",
    "7":"יחידת דיור",
    "8":"דירת נופש",
    "9": "סטודיו/לופט",
    "10":"בית פרטי/קוטג'",
    "11":"דיור מוגן",
    "12":"חניה",
    "13":"מחסן",}

//שחזור פרטי מודעת פרסום מכירה של המשתמש ושליחתם לתצוגה בדף ejs
router.get("/sale/:id", function (req, res, next) {
    if (req.session.views == true) {
        var param = req.params.id;
        (async () => {
            db.Advertising_sale.findAll({where: {id: param}})
                .then(result => {
                    console.log(result[0])
                    listToFill.address_as = result[0].address;
                    listToFill.apartment_num_as = result[0].apartment_num;
                    listToFill.available_immediately_as = result[0].available_immediately;
                    listToFill.email_as = result[0].email
                    listToFill.entry_date_as = result[0].entry_date
                    listToFill.floor_as = result[0].floor;
                    listToFill.free_text_as = result[0].free_text;
                    listToFill.home_vaad_as = result[0].home_vaad
                    listToFill.name_as = result[0].name
                    listToFill.phone_as = result[0].phone
                    listToFill.price_as = result[0].price
                    listToFill.property_size_as = result[0].property_size
                    listToFill.property_tax_as = result[0].property_tax
                    listToFill.rooms_numbers_as = result[0].rooms_numbers
                    listToFill.total_floors_as = result[0].total_floors
                    listToFill.type_property_as = type[result[0].type_property]
                    listToFill.Aid = param;
                    listToFill.air_conditioning_as =result[0].air_conditioning
                    listToFill.elevator_as = result[0].elevator
                    listToFill.parking_as= result[0].parking
                    listToFill.terrace_as= result[0].terrace
                    listToFill.sun_Terrace_as= result[0].sun_Terrace
                    listToFill.renovated_as= result[0].sun_Terrace
                    listToFill.furnished_and_equipped_as= result[0].furnished_and_equipped
                    listToFill.bars_as= result[0].bars
                    listToFill.accessibility_as= result[0].accessibility
                    listToFill.Yard_as= result[0].Yard
                    listToFill.MMD_room_as= result[0].MMD_room
                    listToFill.architectural_Design_as= result[0].architectural_Design
                    listToFill.new_property_as= result[0].new_property
                    listToFill.Storage_as= result[0].Storage
                    listToFill.close_to_public_transportation_as= result[0].close_to_public_transportation
                    listToFill.close_to_kindergartens_as= result[0].close_to_kindergartens
                    listToFill.close_to_train_as= result[0].close_to_train
                    listToFill.close_to_shopping_center_as= result[0].close_to_shopping_center
                    listToFill.close_to_hospital_as= result[0].close_to_hospital
                    listToFill.close_to_school_as= result[0].close_to_school
                    listToFill.close_to_airport_as= result[0].close_to_airport
                    listToFill.near_the_sea_as= result[0].near_the_sea
                    listToFill.secure_area_as= result[0].secure_area
                    listToFill.quiet_area_as= result[0].quiet_area
                    listToFill.Master_unit_as= result[0].Master_unit
                    listToFill.equipped_kitchen_as= result[0].equipped_kitchen
                    listToFill.Jacuzzi_as= result[0].Jacuzzi
                    listToFill.parquet_as= result[0].parquet
                    listToFill.Guard_in_the_building_as= result[0].Guard_in_the_building
                    listToFill.Security_Cameras_as= result[0].Security_Cameras
                    listToFill.Swimming_pool_as= result[0].Swimming_pool
                    listToFill.Bicycle_room_as= result[0].Bicycle_room
                    listToFill.Water_heating_on_gas_as= result[0].Water_heating_on_gas
                    listToFill.underground_parking_lot_as= result[0].underground_parking_lot
                    listToFill.High_ceiling_as= result[0].High_ceiling
                    listToFill.view_of_park_as= result[0].view_of_park
                    listToFill.close_to_gym_as= result[0].close_to_gym
                    listToFill.close_to_HM_as= result[0].close_to_HM
                    listToFill.close_to_park_as= result[0].close_to_park
                    listToFill.Irrigation_system_as= result[0].Irrigation_system

                    res.render("advertisingSaleEdit", listToFill)
                });
        })()
    }

    else {
        res.render('index', {msg: ""});
    }
});
//מחיקת המודעה
router.get("/erase/:id", function (req, res, next) {
    if (req.session.views == true) {
        var param = req.params.id;
        db.Advertising_sale.destroy({where: {id: param}})
        return res.redirect("/homePage")
    }
    else {
        res.render('index', {msg: ""});
    }
});

//=================================== השכרה ===============================
var listToFillLandlord = {
    "address_ar": "", "type_property_ar": "",
    "type_property_ar": "", "apartment_num_ar": "",
    "floor_ar": "", "total_floors_ar": "",
    "property_size_ar": "", "rooms_numbers_ar": "",
    "available_immediately_ar": "checked",
    "entry_date_ar": "",
    "Number_of_payments_ar": "",
    "price_ar": "",
    "property_tax_ar": "",
    "home_vaad_ar": "",
    "name_ar": "",
    "email_ar": "",
    "phone_ar": "",
    "free_text_ar": "",
    "air_conditioning_ar": "",
    "sun_Terrace_ar":"",
    "short_range_ar": "",
    "long_range_ar":"",
    "terrace_ar":"",
    "Yard_ar": "",
    "elevator_ar": "",
    "renovated_ar": "",
    "bars_ar": "",
    "parking_ar": "",
    "MMD_room_ar": "",
    "architectural_Design_ar": "",
    "Storage_ar": "",
    "furnished_and_equipped_ar": "",
    "accessibility_ar": "",
    "High_ceiling_ar": "",
    "new_property_ar": "",
    "quiet_area_ar": "",
    "close_to_kindergartens_ar": "",
    "secure_area_ar": "",
    "close_to_train_ar": "",
    "view_of_park_ar": "",
    "close_to_gym_ar": "",
    "close_to_hospital_ar": "",
    "close_to_shopping_center_ar": "",
    "close_to_park_ar": "",
    "close_to_HM_ar": "",
    "close_to_public_transportation_ar": "",
    "close_to_airport_ar": "",
    "close_to_school_ar": "",
    "near_the_sea_ar": "",
    "Master_unit_ar": "",
    "Jacuzzi_ar": "",
    "Swimming_pool_ar": "",
    "Water_heating_on_gas_ar": "",
    "Guard_in_the_building_ar": "",
    "underground_parking_lot_ar": "",
    "parquet_ar": "",
    "equipped_kitchen_ar": "",
    "Bicycle_room_ar": "",
    "Security_Cameras_ar": "",
    "Irrigation_system_ar": "",
    "Aid":""
}
var type=  {"1":"דירה",
    "2":"דירת גן",
    "3":"וילה",
    "4":"גג/פנטהוז",
    "5":"דופלקס",
    "6":"טריפלקס",
    "7":"יחידת דיור",
    "8":"דירת נופש",
    "9": "סטודיו/לופט",
    "10":"בית פרטי/קוטג'",
    "11":"דיור מוגן",
    "12":"חניה",
    "13":"מחסן",}
var type2=  {"1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9": "9",
    "10":"10'",
    "11":"11",
    "12":"12",
    "13":"13",}

//שחזור פרטי מודעת חיפו השכרה של המשתמש ושליחתם לתצוגה בדף ejs
router.get("/Landlord/:id", function (req, res, next) {
    if (req.session.views == true) {
        var param = req.params.id;
        (async () => {
            db.advertising_renting.findAll({where: {id: param}})
                .then(result => {
                    console.log(result[0])
                    listToFillLandlord.address_ar = result[0].address;
                    listToFillLandlord.apartment_num_ar = result[0].apartment_num;
                    listToFillLandlord.available_immediately_ar = result[0].available_immediately;
                    listToFillLandlord.email_ar = result[0].email
                    listToFillLandlord.entry_date_ar = result[0].entry_date
                    listToFillLandlord.floor_ar = result[0].floor;
                    listToFillLandlord.free_text_ar = result[0].free_text;
                    listToFillLandlord.home_vaad_ar = result[0].home_vaad
                    listToFillLandlord.name_ar = result[0].name
                    listToFillLandlord.phone_ar = result[0].phone
                    listToFillLandlord.price_ar = result[0].price
                    listToFillLandlord.property_size_ar = result[0].property_size
                    listToFillLandlord.property_tax_ar = result[0].property_tax
                    listToFillLandlord.rooms_numbers_ar = result[0].rooms_numbers
                    listToFillLandlord.total_floors_ar = result[0].total_floors
                    listToFillLandlord.type_property_ar = type[result[0].type_property]
                    listToFillLandlord.Aid = param;
                    listToFillLandlord.air_conditioning_ar =result[0].air_conditioning
                    listToFillLandlord.elevator_ar = result[0].elevator
                    listToFillLandlord.parking_ar= result[0].parking
                    listToFillLandlord.terrace_ar= result[0].terrace
                    listToFillLandlord.sun_Terrace_ar= result[0].sun_Terrace
                    listToFillLandlord.renovated_ar= result[0].sun_Terrace
                    listToFillLandlord.furnished_and_equipped_ar= result[0].furnished_and_equipped
                    listToFillLandlord.bars_ar= result[0].bars
                    listToFillLandlord.accessibility_ar= result[0].accessibility
                    listToFillLandlord.Yard_ar= result[0].Yard
                    listToFillLandlord.MMD_room_ar= result[0].MMD_room
                    listToFillLandlord.architectural_Design_ar= result[0].architectural_Design
                    listToFillLandlord.new_property_ar= result[0].new_property
                    listToFillLandlord.Storage_ar= result[0].Storage
                    listToFillLandlord.close_to_public_transportation_ar= result[0].close_to_public_transportation
                    listToFillLandlord.close_to_kindergartens_ar= result[0].close_to_kindergartens
                    listToFillLandlord.close_to_train_ar= result[0].close_to_train
                    listToFillLandlord.close_to_shopping_center_ar= result[0].close_to_shopping_center
                    listToFillLandlord.close_to_hospital_ar= result[0].close_to_hospital
                    listToFillLandlord.close_to_school_ar= result[0].close_to_school
                    listToFillLandlord.close_to_airport_ar= result[0].close_to_airport
                    listToFillLandlord.near_the_sea_ar= result[0].near_the_sea
                    listToFillLandlord.secure_area_ar= result[0].secure_area
                    listToFillLandlord.quiet_area_ar= result[0].quiet_area
                    listToFillLandlord.Master_unit_ar= result[0].Master_unit
                    listToFillLandlord.equipped_kitchen_ar= result[0].equipped_kitchen
                    listToFillLandlord.Jacuzzi_ar= result[0].Jacuzzi
                    listToFillLandlord.parquet_ar= result[0].parquet
                    listToFillLandlord.Guard_in_the_building_ar= result[0].Guard_in_the_building
                    listToFillLandlord.Security_Cameras_ar= result[0].Security_Cameras
                    listToFillLandlord.Swimming_pool_ar= result[0].Swimming_pool
                    listToFillLandlord.Bicycle_room_ar= result[0].Bicycle_room
                    listToFillLandlord.Water_heating_on_gas_ar= result[0].Water_heating_on_gas
                    listToFillLandlord.underground_parking_lot_ar= result[0].underground_parking_lot
                    listToFillLandlord.High_ceiling_ar= result[0].High_ceiling
                    listToFillLandlord.view_of_park_ar= result[0].view_of_park
                    listToFillLandlord.close_to_gym_ar= result[0].close_to_gym
                    listToFillLandlord.close_to_HM_ar= result[0].close_to_HM
                    listToFillLandlord.close_to_park_ar= result[0].close_to_park
                    listToFillLandlord.Irrigation_system_ar= result[0].Irrigation_system
                    listToFillLandlord.short_range_ar= result[0].short_range
                    listToFillLandlord.long_range_ar= result[0].long_range
                    listToFillLandlord.Number_of_payments_ar= type2[result[0].Number_of_payments]

                    res.render("advertisingRentingEdit", listToFillLandlord)
                });

        })()
    }

    else {
        res.render('index', {msg: ""});
    }
});

router.get("/eraseLandlord/:id", function (req, res, next) {
    if (req.session.views == true) {

        var param = req.params.id;
        db.advertising_renting.destroy({where: {id: param}})
        return res.redirect("/homePage")
    }
    else {
        res.render('index', {msg: ""});
    }
});

//=================================== קנייה ===============================

var listToFillBuy = {
    "address_ss": "",
    "type_property_ss": "",
    "From_price_ss": "", "Until_Price_ss": "",
    "From_square_meters_ss": "", "Until_square_meters_ss": "",
    "From_num_rooms_ss": "", "Until_num_rooms_ss": "",
    "from_floor_ss": "", "Until_floor_ss": "",
    "available_immediately_ss": "checked",
    "name_ss": "",
    "email_ss": "",
    "phone_ss": "",
    "free_text_ss": "",
    "air_conditioning_ss": "",
    "sun_Terrace_ss":"",
    "terrace_ss":"",
    "Yard_ss": "",
    "elevator_ss": "",
    "renovated_ss": "",
    "bars_ss": "",
    "parking_ss": "",
    "MMD_room_ss": "",
    "architectural_Design_ss": "",
    "Storage_ss": "",
    "furnished_and_equipped_ss": "",
    "accessibility_ss": "",
    "High_ceiling_ss": "",
    "new_property_ss": "",
    "quiet_area_ss": "",
    "close_to_kindergartens_ss": "",
    "secure_area_ss": "",
    "close_to_train_ss": "",
    "view_of_park_ss": "",
    "close_to_gym_ss": "",
    "close_to_hospital_ss": "",
    "close_to_shopping_center_ss": "",
    "close_to_park_ss": "",
    "close_to_HM_ss": "",
    "close_to_public_transportation_ss": "",
    "close_to_airport_ss": "",
    "close_to_school_ss": "",
    "near_the_sea_ss": "",
    "Master_unit_ss": "",
    "Jacuzzi_ss": "",
    "Swimming_pool_ss": "",
    "Water_heating_on_gas_ss": "",
    "Guard_in_the_building_ss": "",
    "underground_parking_lot_ss": "",
    "parquet_ss": "",
    "equipped_kitchen_ss": "",
    "Bicycle_room_ss": "",
    "Security_Cameras_ss": "",
    "Irrigation_system_ss": "",
    "Aid":""
}
var type=  {"1":"דירה",
    "2":"דירת גן",
    "3":"וילה",
    "4":"גג/פנטהוז",
    "5":"דופלקס",
    "6":"טריפלקס",
    "7":"יחידת דיור",
    "8":"דירת נופש",
    "9": "סטודיו/לופט",
    "10":"בית פרטי/קוטג'",
    "11":"דיור מוגן",
    "12":"חניה",
    "13":"מחסן",}

//שחזור פרטי מודעת קנייה- חיפוש מכירה של המשתמש ושליחתם לתצוגה בדף ejs
router.get("/buy/:id", function (req, res, next) {
    if (req.session.views == true) {
        var param = req.params.id;
        (async () => {
            db.Sale_search.findAll({where: {id: param}})
                .then(result => {
                    console.log(result[0])
                    listToFillBuy.address_ss = result[0].address;
                    listToFillBuy.available_immediately_ss = result[0].available_immediately;
                    listToFillBuy.email_ss = result[0].email
                    listToFillBuy.From_price_ss = result[0].From_price
                    listToFillBuy.Until_Price_ss = result[0].Until_Price;
                    listToFillBuy.free_text_ss = result[0].free_text;
                    listToFillBuy.From_square_meters_ss = result[0].From_square_meters
                    listToFillBuy.Until_square_meters_ss = result[0].Until_square_meters
                    listToFillBuy.name_ss = result[0].name
                    listToFillBuy.phone_ss = result[0].phone
                    listToFillBuy.From_num_rooms_ss = result[0].From_num_rooms
                    listToFillBuy.Until_num_rooms_ss = result[0].Until_num_rooms
                    listToFillBuy.from_floor_ss = result[0].from_floor
                    listToFillBuy.Until_floor_ss = result[0].Until_floor
                    listToFillBuy.type_property_ss = type[result[0].type_property]
                    listToFillBuy.Aid = param;
                    listToFillBuy.air_conditioning_ss =result[0].air_conditioning
                    listToFillBuy.elevator_ss = result[0].elevator
                    listToFillBuy.parking_ss= result[0].parking
                    listToFillBuy.terrace_ss= result[0].terrace
                    listToFillBuy.sun_Terrace_ss= result[0].sun_Terrace
                    listToFillBuy.renovated_ss= result[0].sun_Terrace
                    listToFillBuy.furnished_and_equipped_ss= result[0].furnished_and_equipped
                    listToFillBuy.bars_ss= result[0].bars
                    listToFillBuy.accessibility_ss= result[0].accessibility
                    listToFillBuy.Yard_ss= result[0].Yard
                    listToFillBuy.MMD_room_ss= result[0].MMD_room
                    listToFillBuy.architectural_Design_ss= result[0].architectural_Design
                    listToFillBuy.new_property_ss= result[0].new_property
                    listToFillBuy.Storage_ss= result[0].Storage
                    listToFillBuy.close_to_public_transportation_ss= result[0].close_to_public_transportation
                    listToFillBuy.close_to_kindergartens_ss= result[0].close_to_kindergartens
                    listToFillBuy.close_to_train_ss= result[0].close_to_train
                    listToFillBuy.close_to_shopping_center_ss= result[0].close_to_shopping_center
                    listToFillBuy.close_to_hospital_ss= result[0].close_to_hospital
                    listToFillBuy.close_to_school_ss= result[0].close_to_school
                    listToFillBuy.close_to_airport_ss= result[0].close_to_airport
                    listToFillBuy.near_the_sea_ss= result[0].near_the_sea
                    listToFillBuy.secure_area_ss= result[0].secure_area
                    listToFillBuy.quiet_area_ss= result[0].quiet_area
                    listToFillBuy.Master_unit_ss= result[0].Master_unit
                    listToFillBuy.equipped_kitchen_ss= result[0].equipped_kitchen
                    listToFillBuy.Jacuzzi_ss= result[0].Jacuzzi
                    listToFillBuy.parquet_ss= result[0].parquet
                    listToFillBuy.Guard_in_the_building_ss= result[0].Guard_in_the_building
                    listToFillBuy.Security_Cameras_ss= result[0].Security_Cameras
                    listToFillBuy.Swimming_pool_ss= result[0].Swimming_pool
                    listToFillBuy.Bicycle_room_ss= result[0].Bicycle_room
                    listToFillBuy.Water_heating_on_gas_ss= result[0].Water_heating_on_gas
                    listToFillBuy.underground_parking_lot_ss= result[0].underground_parking_lot
                    listToFillBuy.High_ceiling_ss= result[0].High_ceiling
                    listToFillBuy.view_of_park_ss= result[0].view_of_park
                    listToFillBuy.close_to_gym_ss= result[0].close_to_gym
                    listToFillBuy.close_to_HM_ss= result[0].close_to_HM
                    listToFillBuy.close_to_park_ss= result[0].close_to_park
                    listToFillBuy.Irrigation_system_ss= result[0].Irrigation_system

                    res.render("SaleSearchEdit", listToFillBuy)
                });

        })()
    }

    else {
        res.render('index', {msg: ""});
    }
});

router.get("/eraseBuy/:id", function (req, res, next) {
    if (req.session.views == true) {

        var param = req.params.id;
        db.Sale_search.destroy({where: {id: param}})
        return res.redirect("/homePage")
    }
    else {
        res.render('index', {msg: ""});
    }
});
//=================================== שכירה ===============================
var listToFillRent = {
    "address_rs": "",
    "type_property_rs": "",
    "Number_of_payments_rs": "",
    "From_price_rs": "", "Until_Price_rs": "",
    "From_square_meters_rs": "", "Until_square_meters_rs": "",
    "From_num_rooms_rs": "", "Until_num_rooms_rs": "",
    "from_floor_rs": "", "Until_floor_rs": "",
    "available_immediately_rs": "checked",
    "name_rs": "",
    "email_rs": "",
    "phone_rs": "",
    "free_text_rs": "",
    "air_conditioning_rs": "",
    "sun_Terrace_rs":"",
    "terrace_rs":"",
    "Yard_rs": "",
    "elevator_rs": "",
    "renovated_rs": "",
    "bars_rs": "",
    "parking_rs": "",
    "MMD_room_rs": "",
    "architectural_Design_rs": "",
    "Storage_rs": "",
    "furnished_and_equipped_rs": "",
    "accessibility_rs": "",
    "High_ceiling_rs": "",
    "new_property_rs": "",
    "quiet_area_rs": "",
    "close_to_kindergartens_rs": "",
    "secure_area_rs": "",
    "close_to_train_rs": "",
    "view_of_park_rs": "",
    "close_to_gym_rs": "",
    "close_to_hospital_rs": "",
    "close_to_shopping_center_rs": "",
    "close_to_park_rs": "",
    "close_to_HM_rs": "",
    "close_to_public_transportation_rs": "",
    "close_to_airport_rs": "",
    "close_to_school_rs": "",
    "near_the_sea_rs": "",
    "Master_unit_rs": "",
    "Jacuzzi_rs": "",
    "Swimming_pool_rs": "",
    "Water_heating_on_gas_rs": "",
    "Guard_in_the_building_rs": "",
    "underground_parking_lot_rs": "",
    "parquet_rs": "",
    "equipped_kitchen_rs": "",
    "Bicycle_room_rs": "",
    "Security_Cameras_rs": "",
    "Irrigation_system_rs": "",
    "short_range_rs": "",
    "long_range_rs": "",

    "Aid":""
}
var type=  {"1":"דירה",
    "2":"דירת גן",
    "3":"וילה",
    "4":"גג/פנטהוז",
    "5":"דופלקס",
    "6":"טריפלקס",
    "7":"יחידת דיור",
    "8":"דירת נופש",
    "9": "סטודיו/לופט",
    "10":"בית פרטי/קוטג'",
    "11":"דיור מוגן",
    "12":"חניה",
    "13":"מחסן",}

var type2=  {"1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9": "9",
    "10":"10'",
    "11":"11",
    "12":"12",
    "13":"13",}
//שחזור פרטי מודעת חיפוש השכרה של המשתמש ושליחתם לתצוגה בדף ejs
router.get("/rent/:id", function (req, res, next) {
    if (req.session.views == true) {
        var param = req.params.id;
        (async () => {
            db.renting_search.findAll({where: {id: param}})
                .then(result => {
                    console.log(result[0])
                    listToFillRent.address_rs = result[0].address;
                    listToFillRent.available_immediately_rs = result[0].available_immediately;
                    listToFillRent.email_rs = result[0].email
                    listToFillRent.From_price_rs = result[0].From_price
                    listToFillRent.Until_Price_rs = result[0].Until_Price;
                    listToFillRent.free_text_rs = result[0].free_text;
                    listToFillRent.From_square_meters_rs = result[0].From_square_meters
                    listToFillRent.Until_square_meters_rs = result[0].Until_square_meters
                    listToFillRent.name_rs = result[0].name
                    listToFillRent.phone_rs = result[0].phone
                    listToFillRent.From_num_rooms_rs = result[0].From_num_rooms
                    listToFillRent.Until_num_rooms_rs = result[0].Until_num_rooms
                    listToFillRent.from_floor_rs = result[0].from_floor
                    listToFillRent.Until_floor_rs = result[0].Until_floor
                    listToFillRent.type_property_rs = type[result[0].type_property]
                    listToFillRent.Aid = param;
                    listToFillRent.air_conditioning_rs =result[0].air_conditioning
                    listToFillRent.elevator_rs = result[0].elevator
                    listToFillRent.parking_rs= result[0].parking
                    listToFillRent.terrace_rs= result[0].terrace
                    listToFillRent.sun_Terrace_rs= result[0].sun_Terrace
                    listToFillRent.renovated_rs= result[0].sun_Terrace
                    listToFillRent.furnished_and_equipped_rs= result[0].furnished_and_equipped
                    listToFillRent.bars_rs= result[0].bars
                    listToFillRent.accessibility_rs= result[0].accessibility
                    listToFillRent.Yard_rs= result[0].Yard
                    listToFillRent.MMD_room_rs= result[0].MMD_room
                    listToFillRent.architectural_Design_rs= result[0].architectural_Design
                    listToFillRent.new_property_rs= result[0].new_property
                    listToFillRent.Storage_rs= result[0].Storage
                    listToFillRent.close_to_public_transportation_rs= result[0].close_to_public_transportation
                    listToFillRent.close_to_kindergartens_rs= result[0].close_to_kindergartens
                    listToFillRent.close_to_train_rs= result[0].close_to_train
                    listToFillRent.close_to_shopping_center_rs= result[0].close_to_shopping_center
                    listToFillRent.close_to_hospital_rs= result[0].close_to_hospital
                    listToFillRent.close_to_school_rs= result[0].close_to_school
                    listToFillRent.close_to_airport_rs= result[0].close_to_airport
                    listToFillRent.near_the_sea_rs= result[0].near_the_sea
                    listToFillRent.secure_area_rs= result[0].secure_area
                    listToFillRent.quiet_area_rs= result[0].quiet_area
                    listToFillRent.Master_unit_rs= result[0].Master_unit
                    listToFillRent.equipped_kitchen_rs= result[0].equipped_kitchen
                    listToFillRent.Jacuzzi_rs= result[0].Jacuzzi
                    listToFillRent.parquet_rs= result[0].parquet
                    listToFillRent.Guard_in_the_building_rs= result[0].Guard_in_the_building
                    listToFillRent.Security_Cameras_rs= result[0].Security_Cameras
                    listToFillRent.Swimming_pool_rs= result[0].Swimming_pool
                    listToFillRent.Bicycle_room_rs= result[0].Bicycle_room
                    listToFillRent.Water_heating_on_gas_rs= result[0].Water_heating_on_gas
                    listToFillRent.underground_parking_lot_rs= result[0].underground_parking_lot
                    listToFillRent.High_ceiling_rs= result[0].High_ceiling
                    listToFillRent.view_of_park_rs= result[0].view_of_park
                    listToFillRent.close_to_gym_rs= result[0].close_to_gym
                    listToFillRent.close_to_HM_rs= result[0].close_to_HM
                    listToFillRent.close_to_park_rs= result[0].close_to_park
                    listToFillRent.Irrigation_system_rs= result[0].Irrigation_system
                    listToFillRent.short_range_rs= result[0].short_range
                    listToFillRent.long_range_rs= result[0].long_range
                    listToFillRent.Number_of_payments_rs= type2[result[0].Number_of_payments]

                    res.render("rentingSearchEdit", listToFillRent)
                });

        })()
    }

    else {
        res.render('index', {msg: ""});
    }
});

router.get("/eraseRent/:id", function (req, res, next) {
    if (req.session.views == true) {

        var param = req.params.id;
        db.renting_search.destroy({where: {id: param}})
        return res.redirect("/homePage")
    }
    else {
        res.render('index', {msg: ""});
    }
});
module.exports = router;