var express = require('express');
var router = express.Router();
var request = require("request");
var config = require("../config");

router.get('/', function(req, res, next) {
    res.render('weatherForm', {});
});

/* GET home page. */
router.post('/current', function(req, res, next) {
  
  var city = req.body.city;
  city = city + ',us';

  var options = { 
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    qs: 
     { q: city,
       units: 'imperial',
       mode: 'json',
       APPID: config.weatherAPI }
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    //console.log(body);
    res.render('weather', { title: 'Express',weather: JSON.parse(body)});
  }); 
});

router.post('/forecast', function(req, res, next) {
  
  var city = req.body.city;
  city = city + ',us';

    var options = { 
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/forecast',
      qs: 
       { q: city,
         units: 'imperial',
         mode: 'json',
         APPID: config.weatherAPI }
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      //console.log(body);
      res.render('weatherForecast', { title: 'Express',forecast: JSON.parse(body)});
    }); 
  });

module.exports = router;
