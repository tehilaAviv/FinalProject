var express = require('express');
var router = express.Router();
var data = {};
const {Op} = require('sequelize');
const {Sequelize} = require('sequelize');
const db = require("../models/");

//========================== מכירה =========================
//שליפה מהמסד את כל המודעות פרסום מכירה של המשתמש
router.get("/returnUserSale", function (req, res, next) {

    if (req.session.views) {
        return db.Advertising_sale.findAll({
            where: {UserId: user.id}
        })
            .then((prod) => res.json(prod))
            .catch((err) => {
                console.log('error', JSON.stringify(err));
            });

        return res.end();
    } else {
        res.render('index', {msg: ""});
    }

});
//טיפול באלגוריתם - סינון פרטים ושליחת כל המודעות קניה שמתאימות למודעת פרסום מכירה
router.post("/returnBuy/:id", function (req, res, next) {
    var id = req.params.id;
    if (req.session.views == true) {
        const AptInfo = req.body;
        return db.Sale_search.findAll(
            {
                where: {
                    [Op.and]: [{
                        [Op.and]: [{
                            From_price: {
                                [Op.lte]: AptInfo.id_.price
                            }
                        },
                            {
                                Until_Price: {
                                    [Op.gte]: AptInfo.id_.price
                                }
                            }]
                    },
                        {
                            [Op.and]: [{
                                From_num_rooms: {
                                    [Op.lte]: AptInfo.id_.rooms_numbers
                                }
                            },
                                {
                                    Until_num_rooms: {
                                        [Op.gte]: AptInfo.id_.rooms_numbers
                                    }
                                }]
                        },

                        {
                            [Op.and]: [{
                                from_floor: {
                                    [Op.lte]: AptInfo.id_.floor
                                }
                            },
                                {
                                    Until_floor: {
                                        [Op.gte]: AptInfo.id_.floor
                                    }
                                }]
                        },
                        {
                            [Op.and]: [{
                                From_square_meters: {
                                    [Op.lte]: AptInfo.id_.property_size
                                }
                            },
                                {
                                    Until_square_meters: {
                                        [Op.gte]: AptInfo.id_.property_size
                                    }
                                }]


                        },

                        //borda
                        {
                            type_property: {
                                [Op.eq]: AptInfo.id_.type_property
                            }
                        },
                        {
                            [Op.or]: [{
                                address: {
                                    [Op.like]: AptInfo.id_.address
                                }
                            },
                                {
                                    address: {
                                        [Op.like]: AptInfo.id_.city
                                    }
                                }]
                            // address: {
                            //     [Op.like]: AptInfo.id_.address
                            // }
                        }


                    ]
                }


            }
        )
            .then((prod) => res.json(prod))
            .catch((err) => {
                console.log('error', JSON.stringify(err));
            });

        return res.end();
    } else {
        res.render('index', {msg: ""});
    }

});
//========================== קנייה =========================
//שליפה מהמסד את כל המודעות קנייה- חיפוש מכירה של המשתמש
router.get("/returnUserBuy", function (req, res, next) {
    if (req.session.views) {
        return db.Sale_search.findAll({
            where: {UserId: user.id}
        })
            .then((prod) => res.json(prod))
            .catch((err) => {
                console.log('error', JSON.stringify(err));
            });
        return res.end();
    } else {
        res.render('index', {msg: ""});
    }

});
//טיפול באלגוריתם - סינון פרטים ושליחת כל המודעות מכירה שמתאימות למודעת חיפוש קנייה
router.post("/returnSale/:id", function (req, res, next) {
    var id = req.params.id;
    if (req.session.views == true) {
        const AptInfo = req.body;

        return db.Advertising_sale.findAll(
            {
                where: {

                    [Op.and]: [{
                        [Op.and]: [{
                            price: {
                                [Op.lte]: AptInfo.id_.Until_Price
                            }
                        },
                            {
                                price: {
                                    [Op.gte]: AptInfo.id_.From_price
                                }
                            }]
                    },
                        {
                            [Op.and]: [{
                                rooms_numbers: {
                                    [Op.lte]: AptInfo.id_.Until_num_rooms
                                }
                            },
                                {
                                    rooms_numbers: {
                                        [Op.gte]: AptInfo.id_.From_num_rooms
                                    }
                                }]
                        },

                        {
                            [Op.and]: [{
                                floor: {
                                    [Op.lte]: AptInfo.id_.Until_floor
                                }
                            },
                                {
                                    floor: {
                                        [Op.gte]: AptInfo.id_.from_floor
                                    }
                                }]
                        },
                        {
                            [Op.and]: [{
                                property_size: {
                                    [Op.lte]: AptInfo.id_.Until_square_meters
                                }
                            },
                                {
                                    property_size: {
                                        [Op.gte]: AptInfo.id_.From_square_meters
                                    }
                                }]


                        },
                        {
                            type_property: {
                                [Op.eq]: AptInfo.id_.type_property
                            }
                        },
                        {
                            [Op.or]: [{
                                address: {
                                    [Op.like]: AptInfo.id_.address
                                }
                            },
                                {
                                   city: {
                                        [Op.like]: AptInfo.id_.address
                                    }
                                }]
                            // address: {
                            //     [Op.like]: AptInfo.id_.address
                            // }
                        }


                    ]
                }


            }
        )
            .then((prod) => res.json(prod))
            .catch((err) => {
                console.log('error', JSON.stringify(err));
            });

        return res.end();
    } else {
        res.render('index', {msg: ""});
    }

});
//========================== השכרה =========================
router.get("/returnUserLandlord", function (req, res, next) {

    if (req.session.views) {
        return db.advertising_renting.findAll({
            where: {UserId: user.id}
        })
            .then((prod) => res.json(prod))
            .catch((err) => {
                console.log('error', JSON.stringify(err));
            });

        return res.end();
    } else {
        res.render('index', { msg:""});
    }

});
//טיפול באלגוריתם - סינון פרטים ושליחת כל מודעות חיפוש השכרה שמתאימות למודעת פרסום השכרה
router.post("/returnRent/:id", function (req, res, next) {

    var id = req.params.id;
    if (req.session.views == true) {
        const AptInfo = req.body;

        return db.renting_search.findAll(
            {
                where: {

                    [Op.and]: [{
                        [Op.and]: [{
                            From_price: {
                                [Op.lte]: AptInfo.id_.price
                            }
                        },
                            {
                                Until_Price: {
                                    [Op.gte]: AptInfo.id_.price
                                }
                            }]
                    },
                        {
                            [Op.and]: [{
                                From_num_rooms: {
                                    [Op.lte]: AptInfo.id_.rooms_numbers
                                }
                            },
                                {
                                    Until_num_rooms: {
                                        [Op.gte]: AptInfo.id_.rooms_numbers
                                    }
                                }]
                        },
                        {
                            [Op.or]: [{
                                [Op.and]: [{
                                    short_range: {
                                        [Op.like]: AptInfo.id_.short_range
                                    }
                                },
                                    {
                                    short_range: {
                                        [Op.like]: '%on'
                                    }
                                    }]
                            },
                                {

                                    [Op.and]: [{
                                        Long_range: {
                                            [Op.like]: AptInfo.id_.Long_range
                                        }
                                    },
                                        {
                                            Long_range: {
                                                [Op.like]: '%on'
                                            }
                                        }]
                                }]

                        },

                        {
                            [Op.and]: [{
                                from_floor: {
                                    [Op.lte]: AptInfo.id_.floor
                                }
                            },
                                {
                                    Until_floor: {
                                        [Op.gte]: AptInfo.id_.floor
                                    }
                                }]
                        },
                        {
                            [Op.and]: [{
                                From_square_meters: {
                                    [Op.lte]: AptInfo.id_.property_size
                                }
                            },
                                {
                                    Until_square_meters: {
                                        [Op.gte]: AptInfo.id_.property_size
                                    }
                                }]


                        },
                        {
                            type_property: {
                                [Op.eq]: AptInfo.id_.type_property
                            }
                        },
                        {
                            [Op.or]: [{
                                address: {
                                    [Op.like]: AptInfo.id_.address
                                }
                            },
                                {
                                    address: {
                                        [Op.like]: AptInfo.id_.city
                                    }
                                }]
                            // address: {
                            //     [Op.like]: AptInfo.id_.address
                            // }
                        }


                    ]
                }


            }
        )
            .then((prod) => res.json(prod))
            .catch((err) => {
                console.log('error', JSON.stringify(err));
            });

        return res.end();
    } else {
        res.render('index', { msg:""});
    }

});

//============================================ שכירה =============================
router.get("/returnUserRent", function(req,res, next) {
    if (req.session.views) {
        return db.renting_search.findAll({
            where: {UserId: user.id}
        })
            .then((prod) => res.json(prod))
            .catch((err) => {
                console.log('error', JSON.stringify(err));
            });

        return res.end();
    } else {
        res.render('index', { msg:""});
    }

});
//טיפול באלגוריתם - סינון פרטים ושליחת כל מודעות פרסום השכרה שמתאימות למודעת חיפוש השכרה
router.post("/returnLandlord/:id", function (req, res, next) {
    var id = req.params.id;
    if (req.session.views == true) {
        const AptInfo = req.body;

        return db.advertising_renting.findAll(
            {
                where: {

                    [Op.and]: [{
                        [Op.and]: [{
                            price: {
                                [Op.lte]: AptInfo.id_.Until_Price
                            }
                        },
                            {
                                price: {
                                    [Op.gte]: AptInfo.id_.From_price
                                }
                            }]
                    },
                        {
                            [Op.and]: [{
                                rooms_numbers: {
                                    [Op.lte]: AptInfo.id_.Until_num_rooms
                                }
                            },
                                {
                                    rooms_numbers: {
                                        [Op.gte]: AptInfo.id_.From_num_rooms
                                    }
                                }]
                        },
                        {
                            [Op.or]: [{
                                [Op.and]: [{
                                    short_range: {
                                        [Op.like]: AptInfo.id_.short_range
                                    }
                                },
                                    {
                                        short_range: {
                                            [Op.like]: '%on'
                                        }
                                    }]
                            },
                                {

                                    [Op.and]: [{
                                        Long_range: {
                                            [Op.like]: AptInfo.id_.Long_range
                                        }
                                    },
                                        {
                                            Long_range: {
                                                [Op.like]: '%on'
                                            }
                                        }]
                                }]

                        },
                        {
                            [Op.and]: [{
                                floor: {
                                    [Op.lte]: AptInfo.id_.Until_floor
                                }
                            },
                                {
                                    floor: {
                                        [Op.gte]: AptInfo.id_.from_floor
                                    }
                                }]
                        },
                        {
                            [Op.and]: [{
                                property_size: {
                                    [Op.lte]: AptInfo.id_.Until_square_meters
                                }
                            },
                                {
                                    property_size: {
                                        [Op.gte]: AptInfo.id_.From_square_meters
                                    }
                                }]


                        },
                        {
                            type_property: {
                                [Op.eq]: AptInfo.id_.type_property
                            }
                        },
                        {
                            [Op.or]: [{
                                address: {
                                    [Op.like]: AptInfo.id_.address
                                }
                            },
                                {
                                    city: {
                                        [Op.like]: AptInfo.id_.address
                                    }
                                }]
                        }


                    ]
                }


            }
        )
            .then((prod) => res.json(prod))
            .catch((err) => {
                console.log('error', JSON.stringify(err));
            });

        return res.end();
    } else {
        res.render('index', { msg:""});
    }

});

module.exports = router;
