var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//schema for the eventbrite Events stored in the db
//only saved events and events participated in are stored in db
//can make an Event object with given fields then insert later into db
//unique identifer is combination of username and title
var EventSchema = new Schema({
    //username of user who liked/went to event - example: "mwcote97"
    username:{
        type: String, 
        required: true
    },
    //title of the event - example: "Boston Marathon"
    title:{
        type: String,
        required: true
    },
    //a brief description of the event - example: "One of the oldest races in the US,
    // featuring thousands of competitive runners"
    description:{
        type: String,
        required: true
    },
    //a url for the event pointing to the event brite website - example: 
    //"https://www.eventbrite.com/e/odsc-east-2018-open-data-science-conference-save-20-tickets-39574791266?aff=ebdssbcitybrowse"
    url:{
        type: String,
        required: true
    },
    //the time the event starts  - example: "2018-04-07T17:00:00.511Z"
    startTime:{
        type: Date,
        required: true
    },
    //the time the event ends -example: "2018-04-07T17:00:00.511Z"
    endTime:{
        type: Date,
        required: true
    },
    //boolean to indicate if the event was saved for later or the user participated in the event
    //true if the event was saved for later, false if event is a past event
    saved: {
        type: Boolean, 
        required: true
    },
    //the venue of the event - example: TD Garden
    venue:{
        type: String,
        default: ""
    },
    //the address of the venue - example: "2 Amherst Street, Cambridge Massachusetts, 02142"
    address: {
        type: String,
        default: ""
    },
    //what kind of event it is - example: conference, concert, talk, etc
    format: {
        type: String,
        default: ""
    },
    //the category of the event as assigned by eventbrite - example: "Food and Drink"
    category: {
        type: String,
        default: ""
    }
});

/*
changes: get rid of format, add longitude and latitude, image_url
*/

var Event = module.exports = mongoose.model('Event', EventSchema);

//save the newEvent object into the db as a new document in the events collection
module.exports.saveEvent = function(callback, newEvent){
    newEvent.save(callback);
}

//gets the saved events from the db based on the username of user that saved them
module.exports.getSavedEventsByUsername = function(callback, username){
    const query = {username: username, saved: true};
    Event.find(query, callback).sort({date: -1});
}

//same as above except for past events
module.exports.getPastEventsByUsername = function(callback, username){
    const query = {username: username, saved: false};
    Event.find(query, callback).sort({date: -1});
}