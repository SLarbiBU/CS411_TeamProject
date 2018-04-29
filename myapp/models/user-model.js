const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema =new Schema({
    username: String,
    googleId: String,
    thumbnail: String,
    address: String, 
    city: String,
    state: String,
    zipcode: String,
    interests: [String],
    updated: Boolean
});

const User = mongoose.model('user', userSchema);

module.exports = User;

//function to save the user object
module.exports.saveUser = function(callback, newUser){
    newUser.save(callback);
}

//function to update the user with the given username
module.exports.updateUser = function(callback, username, updatedUser, options){
    const query = {username: username};
    User.findOneAndUpdate(query, updatedUser, options, callback)
}

//function to get the User object based on the username
module.exports.getUserByUsername = function(callback, username){
    const query = {username: username};
    User.findOne(query, callback);
}

//function to get the User object based on the username
module.exports.deleteUser = function(callback, username){
    console.log("in delete");
    console.log(username);
    const query = {username: username};
    User.remove(query, callback);
}