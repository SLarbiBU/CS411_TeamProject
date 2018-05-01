const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//User Schema #1 - holds all the necessary information about the user
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

/* Comments:

username: String,       //unique identifier for the user, is required and is a string -example "mwcote"
googleId: String,       //unique identifier returned by google once logged in and verified - required
thumbnail: String,      //image url asssociated with the user account - required
address: String,        //street address of the user - used for the uber api and is not required but helpful to have
city: String,           //city of the user - - used for the uber api and is not required but helpful to have
state: String,          //state of the user - - used for the uber api and is not required but helpful to have
zipcode: String,        //zipcode of the user - - used for the uber api and is not required but helpful to have
interests: [String],    //interests of the user - asked for at sign up, picked from a specified list of 6 or 7 interests - not required
updated: Boolean        //indicates if the user has filled out the sign up form and given all of the above data - required

*/

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

//function to delete the User object based on the username
module.exports.deleteUser = function(callback, username){
    console.log(username);
    const query = {username: username};
    User.remove(query, callback);
}