const express = require('express');
const router = express.Router();
var config = require("../config");

const request = require("request");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('uberForm', {});
});

router.get('/estimates/:Address/:City/:State/:Zip_Code/:end_latitude/:end_longitude', function(req, res, next) {

    var Address = req.params.Address;
    var City = req.params.City;
    var State = req.params.State;
    var Zip= req.params.Zip_Code;

    var end_longitude= req.params.end_longitude;
    var end_latitude= req.params.end_latitude;

    var total = Address + " " + City + ", " + State + " " + Zip + "";

    const options = { method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/directions/json',
        qs:
            { //origin: '75+9th+Ave+New+York,+NY',
                origin: total,
                destination: 'MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073',
                key: 'AIzaSyBP8B_RmjbgwVFU6HSWT18ikWQG19QQikk' },
        headers:
            { 'Postman-Token': '3da805ba-bd09-4c23-9d49-931730d337db',
                'Cache-Control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        var y = JSON.parse(body);
        var starting_latitude = y.routes[0].legs[0].start_location.lat + '';
        var starting_longitude = y.routes[0].legs[0].start_location.lng + '';




        starting_latitude = starting_latitude + '';
        starting_longitude = starting_longitude + '';

        const options = {
            method: 'GET',
            url: 'https://api.uber.com/v1.2/estimates/price',
            qs:
                {
                    start_latitude: starting_latitude,
                    start_longitude: starting_longitude,
                    end_latitude: end_latitude,
                    end_longitude: end_longitude
                },
            headers:
                {
                    'Postman-Token': '226484f6-f818-4836-a03b-1c5099dde428',
                    'Cache-Control': 'no-cache',
                    Authorization: config.uberAuth}
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.json(JSON.parse(body));
            //res.render('uber', {title: 'Expressas', data: JSON.parse(body)});
        });
    });

});


module.exports = router;
