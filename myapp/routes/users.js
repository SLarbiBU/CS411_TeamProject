var express = require('express');
var router = express.Router();
var User = require('../models/User');

//route used to save the new user. request body contains the user object
router.post("/saveUser", function(req, res, next){
  //makes the new User object using the request body
  let newUser = new User(req.body);

  //attempts to save the user in the db, returns user if successful
  User.saveUser(function(err, user){
    if(err){
        res.json({success: false, msg: "Failed to save user"});
    }
    else{
        res.json({success: true, user: user});
    }
  }, newUser);
});

//route used to get the user object with the given username
//example: localhost:3000/users/getUserByUsername/mwcote97
router.get("/getUserByUsername/:username", function(req, res, next){
  //gets username from request parameters
  var username = req.params.username;

  //gets the user by their username from the db
  User.getUserByUsername(function(err, user){
    if (err){
      res.json(err);
    }
    else{
      res.json(user);
    }
  }, username);
});

//route used to update the user with the given username
//user object is in the body of the request
router.put("/updateUser/", function(req, res, next) {
  //gets username and user from body
  var username = req.body.username;
  let updatedUser = req.body;

  //attempts to update user in database
  User.updateUser(function(err, user){
    if(err){
      res.json({success: false, msg: "Failed to update user"});
    }
    else{
      res.json({success: true, msg: "User updated"});
    }
  }, username, updatedUser, {});
});

module.exports = router;
