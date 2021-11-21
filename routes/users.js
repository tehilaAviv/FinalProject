var express = require('express');
var router = express.Router();
const fs = require('fs');
var md5= require("md5");
var reverse_md5 = require("reverse-md5");
const { Sequelize } = require('sequelize');
const db = require("../models/");
global.user={};
//
// db.sequelize.sync({ force: true })

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/login', function(req, res, next) {

    db.Users.findOne({where:{email: req.body.email_l}})
        .then(response=> {
            {
                if (response != null) {//אם קיים משתמש כזה נפעיל סשן ונעבור לדף הבית
                    user.id=response.id;//get user ID to use for accessing the information from the databases
                    if(md5(req.body.password) == response.password){
                        req.session.views = true;
                        var uName = response.userName
                        res.redirect('/homeUser/?user='+uName);//שליחת המשתמש לדף הבית והצגת שמו בראש הדף
                    }
                    else {//אם לא קיים משתמש שהוזן תשלח הודעת שגיאה
                        req.session.views = false;
                        res.render('index', {msg: 'מייל או סיסמה אינם תקינים'})
                    }
                } else {//אם לא קיים משתמש שהוזן תשלח הודעת שגיאה
                    req.session.views = false;
                    res.render('index', {msg: 'מייל או סיסמה אינם תקינים'})

                }
            }
        });

});
router.get('/register', function(req, res, next) {
    if(!req.session.views )
    {
        res.render('register',{title:'Registering',Errors:''});}
    else{
        res.redirect("/home");
    }
});

module.exports = router;
