var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const cors = require("cors");
var config = require('./config');
const keys = require('./config/keys');
const cookieSession = require('cookie-session'); //incryption for user data
const passportSetup = require('./config/passport-setup');
const passport = require('passport');

//add routers when created - should have new router for each different api category
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var weatherRouter = require('./routes/weather');
var pricePointRouter = require('./routes/pricePoint');
var eventRouter = require('./routes/events');
var categoryRouter = require('./routes/category');
var uberRouter = require('./routes/uber');
var authRouter = require('./routes/oAuth');

var app = express();

//setting up the database - followed https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
var mongoDB = config.dbURL;
mongoose.connect(mongoDB);

//connecting to the database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to the DB");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//cookie to be sent to browser with user information
// manages user session on the website which helps decide whether a user is logged in or not
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,//age of the cookie is for a day in milliseconds in this case
  //24 hours * 60 mins per hour * 60 seconds per min * 1000ms per sec
  keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongoDB
/*mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb 2');
});*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.options('*', cors());

//add the router that was created above
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/weather', weatherRouter);
app.use('/pricePoint', pricePointRouter);
app.use('/events', eventRouter);
app.use('/categories', categoryRouter);
app.use('/uber', uberRouter);
app.use('/auth', authRouter);


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
//angular start up: ng serve --open

