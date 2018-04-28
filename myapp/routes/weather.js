var express = require('express');
var router = express.Router();
var request = require("request");
var config = require("../config");

router.get('/', function(req, res, next) {
    res.render('weatherForm', {});
});

/* GET home page. */
router.get('/current/:longitude/:latitude', function(req, res, next) {

  var longitude = req.params.longitude;
  var latitude = req.params.latitude;

  var options = { 
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    qs: 
     { lat: latitude,
       lon: longitude,
       units: 'imperial',
       mode: 'json',
       APPID: config.weatherAPI }
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    res.json(JSON.parse(body));
  }); 
});

router.get('/forecast/:longitude/:latitude', function(req, res, next) {
  
  var longitude = req.params.longitude;
  var latitude = req.params.latitude;

    var options = { 
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/forecast',
      qs: 
       { lat: latitude,
         lon: longitude,
         units: 'imperial',
         mode: 'json',
         APPID: config.weatherAPI }
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      res.json(JSON.parse(body));
    }); 
  });

module.exports = router;
