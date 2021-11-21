var express = require('express');
var router = express.Router();
var md5= require("md5");
var reverse_md5 = require("reverse-md5");
var data={};
    //user={};
const { Sequelize } = require('sequelize');
const db = require("../models/");
// db.sequelize.sync({
//     force: true
// });
/* GET users listing. */
router.get('/', function(req, res, next) {
    if(!req.session.views )
    {
    res.render("register",{msg:""});}
    else{
        res.redirect("/homePage");
    }

});
router.post('/signUp', function(req, res, next) {
    if(!req.session.views ) {
        data = req.body;
        var pass = md5(data.password);
        (async () => {
            const [user, created] =
                await db.Users.findOrCreate(
                    {
                        where: {email: data.email_f},
                        defaults: {
                            userName: data.name_f,
                            password: pass,
                            email: data.email_f,
                            phone: data.phone_number_f,
                            birthDate: data.birth_date_f
                        }
                    });
            if (!created) {

                req.session.views = false;
                res.render("register", {msg: "Email already exists"})
            } else {
                req.session.views = true; //created session
                var uName = data.name_f
                res.redirect('/homeUser/?user='+uName);
            }
        })();

    }


    else{
        res.redirect("/homePage");
    }
});
router.get('/help', function(req, res, next) {
    if(!req.session.views )
    {
        res.render("help",{msg:""});}
    else{
        res.redirect("/homePage");
    }

});
module.exports = router;
