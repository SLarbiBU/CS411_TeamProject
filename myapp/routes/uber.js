const express = require('express');
const router = express.Router();


const request = require("request");
/* GET home page. */




router.get('/', function(req, res, next) {


        const options = { method: 'GET',
            url: 'https://api.uber.com/v1.2/estimates/price',
            qs:
                { start_latitude: '37.7752315',
                    start_longitude: '-122.418075',
                    end_latitude: '37.7752415',
                    end_longitude: '-122.518075' },
            headers:
                { 'Postman-Token': '226484f6-f818-4836-a03b-1c5099dde428',
                    'Cache-Control': 'no-cache',
                    Authorization: 'Bearer KA.eyJ2ZXJzaW9uIjoyLCJpZCI6ImZkeHN5RlVrVHpDUHUyeGlFTmZ0aVE9PSIsImV4cGlyZXNfYXQiOjE1MjQ3OTA1MDIsInBpcGVsaW5lX2tleV9pZCI6Ik1RPT0iLCJwaXBlbGluZV9pZCI6MX0.AoxdlE-O_arIRiwU-YT7Iu1SX8Th5ClaMf3niBq8TeU' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.render('uber', { title: 'Expressas', data: JSON.parse(body)});
        });


        });










module.exports = router;