var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Subcategory Schema - not its own model, simply used in the FavoriteCategory Schema
//meant to represent the favorite subcategories among a favorite category for a user
//sub documents: http://mongoosejs.com/docs/subdocs.html
var SubcategorySchema = new Schema({
    //the name of the subcategory- example: "Wine" when category is "Food and Drink"
    name: {
        type: String, 
        required: true
    },
    //the subcategory ID assigned by eventbrite - example: "1101"
    catID: {
        type: String,
        required: true
    } 
});

//schema for the eventbrite categories used to classify the events
//meant to represent only the favorite categories which the user has specified during account initialization
//unique identifier for the schema is the combination of username and catID
//Schemas: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
var FavoriteCategorySchema = new Schema({
    //username of user who favorited the category - example: "mwcote97"
    username: {
        type: String, 
        required: true
    },
    //category id assigned by eventbrite - example: "1110001"
    catID:{
        type: String, 
        required: true
    },
    //the name of the category - example: "Food and Drink"
    name:{
        type: String,
        required: true
    },
    //the favorite subcategories from the category - example: ["Beer", "Wine", "Tacos"]
    subcategories: {
        type: [SubcategorySchema],
        required: true
    }
});

var FavoriteCategory = module.exports = mongoose.model('FavoriteCategories', FavoriteCategorySchema);

//using different mongodb calls to manipulate the db
//http://mongoosejs.com/docs/api.html#Model - lists different calls/commands


//function to save the favorite category object
module.exports.saveFavoriteCategory = function(callback, category){
    category.save(callback);
}

//function to save the favorite category objects
module.exports.saveFavoriteCategories = function(callback, categories){
    FavoriteCategory.insertMany(categories, callback);
}

//function to get the favorite category objects based on the username
module.exports.getFavoriteCategoriesByUsername = function(callback, username){
    const query = {username: username};
    FavoriteCategory.find(query, callback);
}

//function to delete the favorite category based on name and username
module.exports.deleteFavoriteCategory = function(callback, name, username){
    const query = {name: name, username: username};
    FavoriteCategory.remove(query, callback);
}