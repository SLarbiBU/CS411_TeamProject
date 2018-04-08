var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Schema for Users of the website
var UserSchema = new Schema({
    username:{
        type: String, 
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    streetAddress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    country:{
        type: String,
        default: "United States"
    },
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