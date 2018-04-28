var express = require('express');
var router = express.Router();
var Event = require('../models/Event');

//route used to save the new event
//the event is in the body of the request
router.post("/saveEvent", function(req, res, next){
    //makes event object using request body
    let newEvent = new Event(req.body);
    
    //attempts to save the event, passing in the new Event object
    Event.saveEvent(function(err, event){
        if(err){
            //sends json response to client
            res.json({success: false, error: err});
        }
        else{
            //sends json response to client
            res.json(event);
        }
    }, newEvent);
});

//route used to get all of the saved events
//username is the parameter in the request
//example: localhost:3000/events/getSavedEventsByUsername/mwcote97
router.get("/getSavedEventsByUsername/:username", function(req, res, next) {
    //gets username from parameter
    var username = req.params.username;
    //tries to get saved events from db, sends back json of events if successful
    Event.getSavedEventsByUsername(function(err, events){
      if(err){
        res.json({success: false, error: err});
      }
        res.json(events);
    }, username);
});

//same as above except for past events
router.get("/getPastEventsByUsername/:username", function(req, res, next) {
    var username = req.params.username;
    Event.getPastEventsByUsername(function(err, events){
      if(err){
        res.json({success: false, error: err});
      }
        res.json(events);
    }, username);
});

router.delete("/deleteEvent/:id", function(req, res, next) {
    var id = req.params.id;
    Event.deleteEvent(function(err, events){
      if(err){
        res.json({success: false, error: err});
      }
        res.json(events);
    }, id);
});

module.exports = router;