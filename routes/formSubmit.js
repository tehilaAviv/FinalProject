var express = require('express');
var router = express.Router();
var data={};
const { Sequelize } = require('sequelize');
const db = require("../models/");
// db.sequelize.sync({force:true});


router.post('/submitAdvertisingSale', function(req, res, next) {
    (async()=>{
        //,city:data.city_as
        data = req.body;
        const c = db.Advertising_sale.create({UserId:user.id,address:data.address_as,city:data.city_as,addressNeig:data.addressNeig_as,type_property:data.type_property_as,apartment_num:data.apartment_num_as,floor:data.floor_as,total_floors:data.total_floors_as,name:data.name_as,property_size:data.property_size_as,rooms_numbers:data.rooms_numbers_as,available_immediately:data.available_immediately_as,entry_date:data.entry_date_as,sun_Terrace:data.sun_Terrace_as,terrace:data.terrace_as,Yard:data.Yard_as,elevator:data.elevator_as,renovated:data.renovated_as,bars:data.bars_as,parking:data.parking_as,MMD_room:data.MMD_room_as,architectural_Design:data.architectural_Design_as,Storage:data.Storage_as,furnished_and_equipped:data.furnished_and_equipped_as,High_ceiling:data.High_ceiling_as,new_property:data.new_property_as,quiet_area:data.quiet_area_as,close_to_kindergartens:data.close_to_kindergartens_as,secure_area:data.secure_area_as,close_to_train:data.close_to_train_as,view_of_park:data.view_of_park_as,close_to_gym:data.close_to_gym_as,close_to_hospital:data.close_to_hospital_as,close_to_shopping_center:data.close_to_shopping_center_as,close_to_park:data.close_to_park_as,close_to_HM:data.close_to_HM_as,close_to_public_transportation:data.close_to_public_transportation_as,close_to_airport:data.close_to_airport_as,close_to_school:data.close_to_school_as,near_the_sea:data.near_the_sea_as,Master_unit:data.Master_unit_as,Jacuzzi:data.Jacuzzi_as,Swimming_pool:data.Swimming_pool_as,Water_heating_on_gas:data.Water_heating_on_gas_as,Guard_in_the_building:data.Guard_in_the_building_as,underground_parking_lot:data.underground_parking_lot_as,parquet:data.parquet_as,equipped_kitchen:data.equipped_kitchen_as,Bicycle_room:data.Bicycle_room_as,Security_Cameras:data.Security_Cameras_as,Irrigation_system:data.Irrigation_system_as,price:data.price_as,property_tax:data.property_tax_as,home_vaad:data.home_vaad_as,email:data.email_as,phone:data.phone_as,anotherPhone:data.anotherPhone_as,free_text:data.free_text_as});
    } )();
    res.redirect('/homePage');
});


router.post('/submitAdvertisingSearch', function(req, res, next) {
    (async()=>{
        data = req.body;
        const c= db.advertising_renting.create({UserId:user.id,address:data.address_ar,city:data.city_ar, addressNeig:data.addressNeig_ar,type_property:data.type_property_ar,name:data.name_ar,apartment_num:data.apartment_num_ar,floor:data.floor_ar,total_floors:data.total_floors_ar,property_size:data.property_size_ar,rooms_numbers:data.rooms_numbers_ar,available_immediately:data.available_immediately_ar,entry_date:data.entry_date_ar,sun_Terrace:data.sun_Terrace_ar,terrace:data.terrace_ar,Yard:data.Yard_ar,elevator:data.elevator_ar,renovated:data.renovated_ar,bars:data.bars_ar,parking:data.parking_ars,MMD_room:data.MMD_room_ar,architectural_Design:data.architectural_Design_ar,Storage:data.Storage_ar,furnished_and_equipped:data.furnished_and_equipped_ar,High_ceiling:data.High_ceiling_ar,new_property:data.new_property_ar,quiet_area:data.quiet_area_ar,close_to_kindergartens:data.close_to_kindergartens_ar,secure_area:data.secure_area_ar,close_to_train:data.close_to_train_ar,view_of_park:data.view_of_park_ar,close_to_gym:data.close_to_gym_ar,close_to_hospital:data.close_to_hospital_ar,close_to_shopping_center:data.close_to_shopping_center_ar,close_to_park:data.close_to_park_ar,close_to_HM:data.close_to_HM_ar,close_to_public_transportation:data.close_to_public_transportation_ar,close_to_airport:data.close_to_airport_ar,close_to_school:data.close_to_school_ar,near_the_sea:data.near_the_sea_ar,Master_unit:data.Master_unit_ar,Jacuzzi:data.Jacuzzi_ar,Swimming_pool:data.Swimming_pool_ar,Water_heating_on_gas:data.Water_heating_on_gas_ar,Guard_in_the_building:data.Guard_in_the_building_ar,underground_parking_lot:data.underground_parking_lot_ar,parquet:data.parquet_ar,equipped_kitchen:data.equipped_kitchen_ar,Bicycle_room:data.Bicycle_room_ar,Security_Cameras:data.Security_Cameras_ar,Irrigation_system:data.Irrigation_system_ar,price:data.price_ar,property_tax:data.property_tax_ar,home_vaad:data.home_vaad_ar,email:data.email_ar,phone:data.phone_ar,anotherPhone:data.anotherPhone_ar,free_text:data.free_text_ar,short_range:data.short_range_ar,long_range:data.long_range_rs,Number_of_payments:data.Number_of_payments_ar});
    } )();
    res.redirect('/homePage');
});

router.post('/submitSearchSale', function(req, res, next) {
    (async()=>{
        data = req.body;
        const c= db.Sale_search.create({UserId:user.id,address:data.address_ss,type_property:data.type_property_ss,From_price:data.From_price_ss,Until_Price:data.Until_Price_ss,From_square_meters:data.From_square_meters_ss,Until_square_meters:data.Until_square_meters_ss,From_num_rooms:data.From_num_rooms_ss,available_immediately:data.available_immediately_ss,name:data.name_ss,Until_num_rooms:data.Until_num_rooms_ss,from_floor:data.from_floor_ss,Until_floor:data.Until_floor_ss,air_conditioning:data.air_conditioning_ss,sun_Terrace:data.sun_Terrace_ss,terrace:data.terrace_ss,Yard:data.Yard_ss,elevator:data.elevator_ss,renovated:data.renovated_ss,bars:data.bars_ss,parking:data.parking_ss,MMD_room:data.MMD_room_ss,architectural_Design:data.architectural_Design_ss,Storage:data.Storage_ss,accessibility:data.accessibility_ss,furnished_and_equipped:data.furnished_and_equipped_ss,High_ceiling:data.High_ceiling_ss,new_property:data.new_property_ss,quiet_area:data.quiet_area_ss,close_to_kindergartens:data.close_to_kindergartens_ss,secure_area:data.secure_area_ss,close_to_train:data.close_to_train_ss,view_of_park:data.view_of_park_ss,close_to_gym:data.close_to_gym_ss,close_to_hospital:data.close_to_hospital_ss,close_to_shopping_center:data.close_to_shopping_center_ss,close_to_park:data.close_to_park_ss,close_to_HM:data.close_to_HM_ss,close_to_public_transportation:data.close_to_public_transportation_ss,close_to_airport:data.close_to_airport_ss,close_to_school:data.close_to_school_ss,near_the_sea:data.near_the_sea_ss,Master_unit:data.Master_unit_ss,Jacuzzi:data.Jacuzzi_ss,Swimming_pool:data.Swimming_pool_ss,Water_heating_on_gas:data.Water_heating_on_gas_ss,Guard_in_the_building:data.Guard_in_the_building_ss,underground_parking_lot:data.underground_parking_lot_ss,parquet:data.parquet_ss,equipped_kitchen:data.equipped_kitchen_ss,Bicycle_room:data.Bicycle_room_ss,Security_Cameras:data.Security_Cameras_ss,Irrigation_system:data.Irrigation_system_ss,email:data.email_ss,phone:data.phone_ss,anotherPhone:data.anotherPhone_ss,free_text:data.free_text_ss});
    } )();
    res.redirect('/homePage');
});


router.post('/submitSearchRenting', function(req, res, next) {
    (async()=>{
        data = req.body;
        const c= db.renting_search.create({UserId:user.id,address:data.address_rs,type_property:data.type_property_rs,From_price:data.From_price_rs,Until_Price:data.Until_Price_rs,From_square_meters:data.From_square_meters_rs,Until_square_meters:data.Until_square_meters_rs,From_num_rooms:data.From_num_rooms_rs,available_immediately:data.available_immediately_rs,Until_num_rooms:data.Until_num_rooms_rs,name:data.name_rs,from_floor:data.from_floor_rs,Until_floor:data.Until_floor_rs,Number_of_payments:data.Number_of_payments_rs,air_conditioning:data.air_conditioning_rs,sun_Terrace:data.sun_Terrace_rs,terrace:data.terrace_rs,Yard:data.Yard_rs,elevator:data.elevator_rs,renovated:data.renovated_rs,bars:data.bars_rs,parking:data.parking_rs,MMD_room:data.MMD_room_rs,architectural_Design:data.architectural_Design_rs,Storage:data.Storage_rs,accessibility:data.accessibility_rs,furnished_and_equipped:data.furnished_and_equipped_rs,High_ceiling:data.High_ceiling_rs,new_property:data.new_property_ss,quiet_area:data.quiet_area_rs,close_to_kindergartens:data.close_to_kindergartens_rs,secure_area:data.secure_area_rs,close_to_train:data.close_to_train_rs,view_of_park:data.view_of_park_rs,close_to_gym:data.close_to_gym_rs,close_to_hospital:data.close_to_hospital_rs,close_to_shopping_center:data.close_to_shopping_center_rs,close_to_park:data.close_to_park_rs,close_to_HM:data.close_to_HM_rs,close_to_public_transportation:data.close_to_public_transportation_rs,close_to_airport:data.close_to_airport_rs,close_to_school:data.close_to_school_rs,near_the_sea:data.near_the_sea_rs,Master_unit:data.Master_unit_rs,Jacuzzi:data.Jacuzzi_rs,Swimming_pool:data.Swimming_pool_rs,Water_heating_on_gas:data.Water_heating_on_gas_rs,Guard_in_the_building:data.Guard_in_the_building_rs,underground_parking_lot:data.underground_parking_lot_rs,parquet:data.parquet_rs,equipped_kitchen:data.equipped_kitchen_rs,Bicycle_room:data.Bicycle_room_rs,Security_Cameras:data.Security_Cameras_rs,Irrigation_system:data.Irrigation_system_rs,email:data.email_rs,phone:data.phone_rs,anotherPhone:data.anotherPhone_rs,free_text:data.free_text_rs,short_range:data.short_range_rs,long_range:data.long_range_rs});
        console.log(req.body.address_rs);

    } )();

    res.redirect('/homePage');
});


/////////////עדכון מכירה//////////
router.post('/submitAdvertisingSaleUpdate', function(req, res, next) {
    (async()=> {
        data = req.body;
        db.Advertising_sale.update({
                address: data.address_as,
                addressNeig:data.addressNeig_as,
                type_property: data.type_property_as,
                apartment_num: data.apartment_num_as,
                floor: data.floor_as,
                total_floors: data.total_floors_as,
                name: data.name_as,
                property_size: data.property_size_as,
                rooms_numbers: data.rooms_numbers_as,
                available_immediately: data.available_immediately_as,
                entry_date: data.entry_date_as,
                sun_Terrace: data.sun_Terrace_as,
                terrace: data.terrace_as,
                Yard: data.Yard_as,
                elevator: data.elevator_as,
                renovated: data.renovated_as,
                bars: data.bars_as,
                parking: data.parking_as,
                MMD_room: data.MMD_room_as,
                architectural_Design: data.architectural_Design_as,
                Storage: data.Storage_as,
                furnished_and_equipped: data.furnished_and_equipped_as,
                High_ceiling: data.High_ceiling_as,
                new_property: data.new_property_as,
                quiet_area: data.quiet_area_as,
                close_to_kindergartens: data.close_to_kindergartens_as,
                secure_area: data.secure_area_as,
                close_to_train: data.close_to_train_as,
                view_of_park: data.view_of_park_as,
                close_to_gym: data.close_to_gym_as,
                close_to_hospital: data.close_to_hospital_as,
                close_to_shopping_center: data.close_to_shopping_center_as,
                close_to_park: data.close_to_park_as,
                close_to_HM: data.close_to_HM_as,
                close_to_public_transportation: data.close_to_public_transportation_as,
                close_to_airport: data.close_to_airport_as,
                close_to_school: data.close_to_school_as,
                near_the_sea: data.near_the_sea_as
                , Master_unit: data.Master_unit_as,
                Jacuzzi: data.Jacuzzi_as,
                Swimming_pool: data.Swimming_pool_as,
                Water_heating_on_gas: data.Water_heating_on_gas_as
                , Guard_in_the_building: data.Guard_in_the_building_as,
                underground_parking_lot: data.underground_parking_lot_as,
                parquet: data.parquet_as,
                equipped_kitchen: data.equipped_kitchen_as,
                Bicycle_room: data.Bicycle_room_as,
                Security_Cameras: data.Security_Cameras_as,
                Irrigation_system: data.Irrigation_system_as,
                price: data.price_as,
                property_tax: data.property_tax_as,
                home_vaad: data.home_vaad_as,
                email: data.email_as, phone: data.phone_as,
                anotherPhone: data.anotherPhone_as,
                free_text: data.free_text_as
            },
            {where: {id: data.Aid}})

    } )();
    console.log("sari");
    res.redirect('/homePage');
});


///////////////////עדכון השכרה/////////////
router.post('/submitAdvertisingRentingUpdate', function(req, res, next) {

    (async()=> {
        data = req.body;

        db.advertising_renting.update({
                address:data.address_ar,
                addressNeig:data.addressNeig_ar,
                type_property:data.type_property_ar,
                name:data.name_ar,apartment_num:data.apartment_num_ar,
                floor:data.floor_ar,
                total_floors:data.total_floors_ar,
                property_size:data.property_size_ar,
                rooms_numbers:data.rooms_numbers_ar,
                available_immediately:data.available_immediately_ar,
                entry_date:data.entry_date_ar,sun_Terrace:data.sun_Terrace_ar,terrace:data.terrace_ar,Yard:data.Yard_ar,elevator:data.elevator_ar,renovated:data.renovated_ar,bars:data.bars_ar,parking:data.parking_ars,MMD_room:data.MMD_room_ar,architectural_Design:data.architectural_Design_ar,Storage:data.Storage_ar,furnished_and_equipped:data.furnished_and_equipped_ar,High_ceiling:data.High_ceiling_ar,new_property:data.new_property_ar,quiet_area:data.quiet_area_ar,close_to_kindergartens:data.close_to_kindergartens_ar,secure_area:data.secure_area_ar,close_to_train:data.close_to_train_ar,view_of_park:data.view_of_park_ar,close_to_gym:data.close_to_gym_ar,close_to_hospital:data.close_to_hospital_ar,close_to_shopping_center:data.close_to_shopping_center_ar,close_to_park:data.close_to_park_ar,close_to_HM:data.close_to_HM_ar,close_to_public_transportation:data.close_to_public_transportation_ar,close_to_airport:data.close_to_airport_ar,close_to_school:data.close_to_school_ar,near_the_sea:data.near_the_sea_ar,Master_unit:data.Master_unit_ar,Jacuzzi:data.Jacuzzi_ar,Swimming_pool:data.Swimming_pool_ar,Water_heating_on_gas:data.Water_heating_on_gas_ar,Guard_in_the_building:data.Guard_in_the_building_ar,underground_parking_lot:data.underground_parking_lot_ar,parquet:data.parquet_ar,equipped_kitchen:data.equipped_kitchen_ar,Bicycle_room:data.Bicycle_room_ar,Security_Cameras:data.Security_Cameras_ar,Irrigation_system:data.Irrigation_system_ar,price:data.price_ar,property_tax:data.property_tax_ar,home_vaad:data.home_vaad_ar,email:data.email_ar,phone:data.phone_ar,anotherPhone:data.anotherPhone_ar,free_text:data.free_text_ar,short_range:data.short_range_ar,long_range:data.long_range_rs,
                Number_of_payments:data.Number_of_payments_ar

            },
            {where: {id: data.Aid}})

    } )();
    res.redirect('/homePage');
});


//////////////////////עדכון קניה//////////////

router.post('/submitSaleSearchUpdate', function(req, res, next) {

    (async()=> {
        data = req.body;

        db.Sale_search.update({
                address:data.address_ss,
                type_property:data.type_property_ss,
                From_price:data.From_price_ss,
                Until_Price:data.Until_Price_ss,
                From_square_meters:data.From_square_meters_ss,
                Until_square_meters:data.Until_square_meters_ss,
                From_num_rooms:data.From_num_rooms_ss,available_immediately:data.available_immediately_ss,name:data.name_ss,Until_num_rooms:data.Until_num_rooms_ss,from_floor:data.from_floor_ss,Until_floor:data.Until_floor_ss,air_conditioning:data.air_conditioning_ss,sun_Terrace:data.sun_Terrace_ss,terrace:data.terrace_ss,Yard:data.Yard_ss,elevator:data.elevator_ss,renovated:data.renovated_ss,bars:data.bars_ss,parking:data.parking_ss,MMD_room:data.MMD_room_ss,architectural_Design:data.architectural_Design_ss,Storage:data.Storage_ss,accessibility:data.accessibility_ss,furnished_and_equipped:data.furnished_and_equipped_ss,High_ceiling:data.High_ceiling_ss,new_property:data.new_property_ss,quiet_area:data.quiet_area_ss,close_to_kindergartens:data.close_to_kindergartens_ss,secure_area:data.secure_area_ss,close_to_train:data.close_to_train_ss,view_of_park:data.view_of_park_ss,close_to_gym:data.close_to_gym_ss,close_to_hospital:data.close_to_hospital_ss,close_to_shopping_center:data.close_to_shopping_center_ss,close_to_park:data.close_to_park_ss,close_to_HM:data.close_to_HM_ss,close_to_public_transportation:data.close_to_public_transportation_ss,close_to_airport:data.close_to_airport_ss,close_to_school:data.close_to_school_ss,near_the_sea:data.near_the_sea_ss,Master_unit:data.Master_unit_ss,Jacuzzi:data.Jacuzzi_ss,Swimming_pool:data.Swimming_pool_ss,Water_heating_on_gas:data.Water_heating_on_gas_ss,Guard_in_the_building:data.Guard_in_the_building_ss,underground_parking_lot:data.underground_parking_lot_ss,parquet:data.parquet_ss,equipped_kitchen:data.equipped_kitchen_ss,Bicycle_room:data.Bicycle_room_ss,Security_Cameras:data.Security_Cameras_ss,Irrigation_system:data.Irrigation_system_ss,email:data.email_ss,phone:data.phone_ss,anotherPhone:data.anotherPhone_ss,
                free_text:data.free_text_ss

            },
            {where: {id: data.Aid}})

    } )();
    res.redirect('/homePage');
});

/////////עדכון שכירה////////
router.post('/submitRentingSearchUpdate', function(req, res, next) {

    (async()=> {
        data = req.body;

        db.renting_search.update({
                address:data.address_rs,
                type_property:data.type_property_rs,
                From_price:data.From_price_rs,
                Until_Price:data.Until_Price_rs,
                From_square_meters:data.From_square_meters_rs,
                Until_square_meters:data.Until_square_meters_rs,From_num_rooms:data.From_num_rooms_rs,available_immediately:data.available_immediately_rs,Until_num_rooms:data.Until_num_rooms_rs,name:data.name_rs,from_floor:data.from_floor_rs,Until_floor:data.Until_floor_rs,Number_of_payments:data.Number_of_payments_rs,air_conditioning:data.air_conditioning_rs,sun_Terrace:data.sun_Terrace_rs,terrace:data.terrace_rs,Yard:data.Yard_rs,elevator:data.elevator_rs,renovated:data.renovated_rs,bars:data.bars_rs,parking:data.parking_rs,MMD_room:data.MMD_room_rs,architectural_Design:data.architectural_Design_rs,Storage:data.Storage_rs,accessibility:data.accessibility_rs,furnished_and_equipped:data.furnished_and_equipped_rs,High_ceiling:data.High_ceiling_rs,new_property:data.new_property_ss,quiet_area:data.quiet_area_rs,close_to_kindergartens:data.close_to_kindergartens_rs,secure_area:data.secure_area_rs,close_to_train:data.close_to_train_rs,view_of_park:data.view_of_park_rs,close_to_gym:data.close_to_gym_rs,close_to_hospital:data.close_to_hospital_rs,close_to_shopping_center:data.close_to_shopping_center_rs,close_to_park:data.close_to_park_rs,close_to_HM:data.close_to_HM_rs,close_to_public_transportation:data.close_to_public_transportation_rs,close_to_airport:data.close_to_airport_rs,close_to_school:data.close_to_school_rs,near_the_sea:data.near_the_sea_rs,Master_unit:data.Master_unit_rs,Jacuzzi:data.Jacuzzi_rs,Swimming_pool:data.Swimming_pool_rs,Water_heating_on_gas:data.Water_heating_on_gas_rs,Guard_in_the_building:data.Guard_in_the_building_rs,underground_parking_lot:data.underground_parking_lot_rs,parquet:data.parquet_rs,equipped_kitchen:data.equipped_kitchen_rs,Bicycle_room:data.Bicycle_room_rs,Security_Cameras:data.Security_Cameras_rs,Irrigation_system:data.Irrigation_system_rs,email:data.email_rs,phone:data.phone_rs,anotherPhone:data.anotherPhone_rs,free_text:data.free_text_rs,short_range:data.short_range_rs,
                long_range:data.long_range_rs

            },
            {where: {id: data.Aid}})

    } )();
    res.redirect('/homePage');
});

module.exports = router;
