var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//add routers when created - should have new router for each different api category
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var weatherRouter = require('./routes/weather');
var pricePointRouter = require('./routes/pricePoint');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add the router that was created above
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/weather', weatherRouter);
app.use('/pricePoint', pricePointRouter);


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


//start up command: set DEBUG=myapp:* & npm start
