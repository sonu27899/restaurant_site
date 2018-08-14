var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cusine_route=require('./routes/cusine_route');
var bill_router=require('./routes/bill_route');
var bill_details_router=require('./routes/bill_details_route');
var past_order_details=require('./routes/past_order_details_route');
var past_order=require('./routes/order_route');
var login=require('./routes/login_route');
var signup=require('./routes/signup_routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cusine',cusine_route);
app.use('/bill',bill_router);
app.use('/bill_details',bill_details_router);
app.use('/pastorder',past_order);
app.use('/past_order_details',past_order_details);
app.use('/login',login);
app.use('/signup',signup);

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
