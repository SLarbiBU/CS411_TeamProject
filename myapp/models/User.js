var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Schema for Users of the website
//unique identifier for the User is the username
var UserSchema = new Schema({
    //username of the user, taken from the OAuth Login - example: "mwcote97"
    username:{
        type: String, 
        required: true
    },
    //the age of the user - example: 21
    age:{
        type: Number,
        required: true
    },
    //the street address of the user - example: "700 Commonwealth Ave"
    streetAddress:{
        type: String,
        required: true
    },
    //the city of residence of the user - example: "Boston"
    city:{
        type: String,
        required: true
    },
    //the state of residence of the user - example: "Massachusetts"
    state:{
        type: String,
        required: true
    },
    //the country of residence of the user - example: "US"
    country:{
        type: String,
        default: "United States"
    },
    //the interests of the user, obtained upon account initialization - example: ["Music", "Technology"]
    interests: {
        type: [String],
        default: []
    }
});

var User = module.exports = mongoose.model('Users', UserSchema);

//function to save the user object
module.exports.saveUser = function(callback, newUser){
    newUser.save(callback);
}

//function to get the User object based on the username
module.exports.getUserByUsername = function(callback, username){
    const query = {username: username};
    User.findOne(query, callback);
}

//function to update the user with the given username
module.exports.updateUser = function(callback, username, updatedUser, options){
    var query = {username: username};
    User.findOneAndUpdate(query, updatedUser, options, callback)
}