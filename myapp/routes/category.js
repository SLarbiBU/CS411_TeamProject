/*
Routing: followed the tutorial/documentation at: https://expressjs.com/en/guide/routing.html
                                                 https://expressjs.com/en/starter/basic-routing.html
*/

var express = require('express');
var router = express.Router();
var FavoriteCategory = require('../models/Category');
var request = require("request");
var config = require('../config');

//route used to save the new favorite categories
//the categories are an array  in the body of the request
router.post("/saveFavoriteCategories", function(req, res, next){
    //populates categories array
    var categories = [];
    
    for (i = 0; i < req.body.categories.length; i++){
        let newCategory = new FavoriteCategory(req.body.categories[i]);
        categories.push(newCategory)
    }
    
    //attempts to save the categories, passing in the new categories array
    //followed https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
    FavoriteCategory.saveFavoriteCategories(function(err, favoriteCategories){
        if(err){
            //sends json response to client
            res.json({success: false, error: err});
        }
        else{
            //sends json response to client with saved categories
            res.json(favoriteCategories);
        }
    }, categories);
});

//route used to get all of the favorite categories for the user
//username is the parameter in the request
//example: localhost:3000/events/getFavoriteCategoriesByUsername/mwcote97
router.get("/getFavoriteCategoriesByUsername/:username", function(req, res, next) {
    //gets username from parameter
    var username = req.params.username;
    //tries to get saved categories from db, sends back json of categories if successful
    FavoriteCategory.getFavoriteCategoriesByUsername(function(err, favoriteCategories){
      if(err){
        //sends json response to client
        res.json({success: false, error: err});
      }
        res.json(favoriteCategories);
    }, username);
});

/* get event brite main categories directly from the api*/
router.post('/getEventbriteCategories', function(req, res, next) {
  
    //code derived from postman
    var options = { method: 'GET',
        url: 'https://www.eventbriteapi.com/v3/categories/',
        qs: { token: config.eventbriteKey }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var response = JSON.parse(body);
        res.json(response);
    });
});

/* get event brite sub categories directly from the api, uses the categoryID from body
   to specify which main category*/
router.post('/getEventbriteSubcategories', function(req, res, next) {

    //ID of the main category which subcategories fall under
    var categoryID = req.body.categoryID;
    var customURL = 'https://www.eventbriteapi.com/v3/categories/' + categoryID + "/";

    //code derived from postman
    var options = { method: 'GET',
    url: customURL,
    qs: { token: config.eventbriteKey }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        var response = JSON.parse(body);
        res.json(response);
    });
});

//route to get categories as options during event search
//will either go to db to get saved categories or fetch all of the categories from event brite
//useCache = true: get user favorite categories, useCache = false: get all categories from the api
router.post('/getCategories', function (req, res, next){
    var useCache = req.body.useCache;
    var username = req.body.username;

    //if using the cache, then get the favorite categories from the db
    if (useCache){
        FavoriteCategory.getFavoriteCategoriesByUsername(function(err, categories){
            if(err){
                res.json({success: false, error: err});
            }
                res.json(categories);
          }, username);
    }
    //otherwise, get all categories from event brite
    else {
        var options = { method: 'GET',
        url: 'https://www.eventbriteapi.com/v3/categories/',
        qs: { token: config.eventbriteKey }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var response = JSON.parse(body);
            res.json(response);
        });
    }
});

//delete a favorite category given its name and the username of the user
router.delete("/deleteFavoriteCategory/:name/:username", function(req, res, next) {
    var name = req.params.name;
    var username = req.params.username;
    FavoriteCategory.deleteFavoriteCategory(function(err, category){
      if(err){
        res.json({success: false, error: err});
      }
        res.json(category);
    }, name, username);
});

module.exports = router;