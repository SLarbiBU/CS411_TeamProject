var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//subcategory
var SubcategorySchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    catID: {
        type: String,
        required: true
    } 
});

//schema for the Events stored in the db
//can make an Event object with given fields then insert later into db
var FavoriteCategorySchema = new Schema({
    username: {
        type: String, 
        required: true
    },
    catID:{
        type: String, 
        required: true
    },
    name:{
        type: String,
        required: true
    },
    subcategories: {
        type: [SubcategorySchema],
        required: true
    }
});

var FavoriteCategory = module.exports = mongoose.model('FavoriteCategories', FavoriteCategorySchema);

//function to save the favorite category object
module.exports.saveFavoriteCategory = function(callback, category){
    category.save(callback);
}

//function to save the favorite category object
module.exports.saveFavoriteCategories = function(callback, categories){
    FavoriteCategory.insertMany(categories, callback);
}

//function to get the favorite category objects based on the username
module.exports.getFavoriteCategoriesByUsername = function(callback, username){
    const query = {username: username};
    FavoriteCategory.find(query, callback);
}

//function to get the User object based on the username
module.exports.deleteFavoriteCategory = function(callback, name, username){
    const query = {name: name, username: username};
    console.log(name);
    FavoriteCategory.remove(query, callback);
}