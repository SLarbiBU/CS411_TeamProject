var express = require('express');
var router = express.Router();
var FavoriteCategory = require('../models/Category');
var request = require("request");

//route used to save the new event
//the event is in the body of the request
router.post("/saveFavoriteCategories", function(req, res, next){
    //makes event object using request body
    var categories = [];
    
    for (i = 0; i < req.body.categories.length; i++){
        let newCategory = new FavoriteCategory(req.body.categories[i]);
        categories.push(newCategory)
    }

    console.log(categories);
    
    //attempts to save the categories, passing in the new categories array
    FavoriteCategory.saveFavoriteCategories(function(err, categories){
        if(err){
            //sends json response to client
            res.json({success: false, msg: err});
        }
        else{
            //sends json response to client
            res.json({success: true, msg: "Saved favorite categories"});
        }
    }, categories);
});

//route used to get all of the favorite categories
//username is the parameter in the request
//example: localhost:3000/events/getFavoriteCategoriesByUsername/mwcote97
router.get("/getFavoriteCategoriesByUsername/:username", function(req, res, next) {
    //gets username from parameter
    var username = req.params.username;
    //tries to get saved categories from db, sends back json of categories if successful
    FavoriteCategory.getFavoriteCategoriesByUsername(function(err, categories){
      if(err){
        throw err;
      }
      res.json(categories);
    }, username);
});

/* get event brite main categories */
router.post('/getEventbriteCategories', function(req, res, next) {
  
    var options = { method: 'GET',
        url: 'https://www.eventbriteapi.com/v3/categories/',
        qs: { token: 'NFYOWMHHAT2MAUY2DZVC' }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var response = JSON.parse(body);
        res.json(response);
    });
});

/* get event brite sub categories */
router.post('/getEventbriteSubcategories', function(req, res, next) {

    //ID of the main category which subcategories fall under
    var categoryID = req.body.categoryID;
    var customURL = 'https://www.eventbriteapi.com/v3/categories/' + categoryID + "/";

    var options = { method: 'GET',
    url: customURL,
    qs: { token: 'NFYOWMHHAT2MAUY2DZVC' }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        var response = JSON.parse(body);
        res.json(response);
    });
});

//delete a favorite category given its name
router.delete("/deleteFavoriteCategory/:name/:username", function(req, res, next) {
    var name = req.params.name;
    var username = req.params.username;
    FavoriteCategory.deleteFavoriteCategory(function(err, category){
      if(err){
        res.json({success: false, msg: "Failed to delete"});
      }
        res.json({success: true, msg: "Sucessfully deleted"});
    }, name, username);
});

module.exports = router;