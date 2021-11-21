var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
const db = require("../models/");
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");
//
var userName;
// db.sequelize.sync({ force: true })
const run = async ()=>{
};

router.post('/upload', upload.single("file"), uploadController.uploadFiles);
/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { msg:""});
});

router.get('/logout',function(req, res, next) {
    if(req.session.views )
    {
        req.session.views = null; //delete session
        req.session.destroy();
res.render("index",{msg:""});
    }
});
router.get('/home', function(req, res, next) {
res.redirect("/homePage");

});

router.get('/homeUser' , function (req,res) {
    if(!req.session.views )
    {
        res.render('index', { msg:""});
    }
else {

        userName =  req.query.user;
        res.redirect('/homePage');
    }
})
router.get('/homePage', function(req, res, next) {
    if(!req.session.views )
    {
        res.render('index', { msg:""});
    }
    else {
        console.log(req.query.user);

        res.render('home', {name: userName});
    }
});
router.get('/getSearch', function(req, res, next) {
    if(!req.session.views )
    {
        res.render('index', { msg:""});
    }
    else
  res.render('search');
});
router.get('/getAdvertising', function(req, res, next) {
    if(!req.session.views )
    {
        res.render('index', { msg:""});
    }
    else{

        res.render('advertising');
    }

});

router.get('/getHelp', function(req, res, next) {
  res.render('help');
});

module.exports = router;
