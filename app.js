var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db= require('mysql');
const sessions = require('express-session');
var indexRouter = require('./routes/index');
var formSubmitRouter = require('./routes/formSubmit');
var usersRouter = require('./routes/users');
var usersRegister = require('./routes/register');
var dbReturn = require('./routes/db');
var dbEdit = require('./routes/edit');

var app = express();

app.use(sessions({
  secret:"somesecretkey",
  resave: false, // Force save of session for each request
  saveUninitialized: false, // Save a session that is new, but has not been modified
  cookie: {maxAge: 3600000 } // milliseconds!
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use('/register',usersRegister)
app.use('/form', formSubmitRouter);
app.use('/users', usersRouter);
app.use('/dbReturn', dbReturn);
app.use('/dbEdit', dbEdit);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

