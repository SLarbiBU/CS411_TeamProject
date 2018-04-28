var express = require('express');
var router = express.Router();
var request = require("request");
var config = require("../config");

router.get('/', function(req, res, next) {
    res.render('pricePointForm', {});
});

/* GET home page. */
router.post('/paid', function(req, res, next) {
  
  var request = require("request");

var options = { method: 'GET',
  url: 'https://www.eventbriteapi.com/v3/events/search/',
  qs: 
   { token: 'NFYOWMHHAT2MAUY2DZVC',
     'start_date.keyword': 'this_weekend',
     'location.address': 'Boston',
     price: 'paid' },
  headers: 
   { 'Postman-Token': '7fe441fd-85f2-4848-b0a1-095b1f075802',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
//console.log(JSON.parse(JSON.stringify(body)));
    res.render('pricePoint', { title: 'Express',pricePoint: JSON.parse(body)});
//res.render('pricePoint', { title: 'Express',pricePoint: (body)});
console.log(body);
});
});



router.post('/free', function(req, res, next) {
  
  var request = require("request");

var options = { method: 'GET',
  url: 'https://www.eventbriteapi.com/v3/events/search/',
  qs: 
   { token: 'NFYOWMHHAT2MAUY2DZVC',
     'start_date.keyword': 'this_weekend',
     'location.address': 'Boston',
     price: 'free' },
  headers: 
   { 'Postman-Token': '7fe441fd-85f2-4848-b0a1-095b1f075802',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
//console.log(JSON.parse(JSON.stringify(body)));
    res.render('pricePointFree', { title: 'Express',pricePointFree: JSON.parse(body)});
//res.render('pricePoint', { title: 'Express',pricePoint: (body)});
console.log(body);
});
});



module.exports = router;




