var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//schema for the Events stored in the db
//can make an Event object with given fields then insert later into db
var EventSchema = new Schema({
    username:{
        type: String, 
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    startTime:{
        type: Date,
        required: true
    },
    endTime:{
        type: Date,
        required: true
    },
    //true if the event was saved for later, false if event is a past event
    saved: {
        type: Boolean, 
        required: true
    },
    venue:{
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    //what kind of event it is (conference, concert, talk, etc)
    format: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    }
});

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