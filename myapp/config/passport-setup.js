// // file in gitignore makes the app safer
//
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');
// const keys = require("./keys");
// const User = require('../models/user-model');
//
//
// passport.serializeUser((user, done) => {
//     //when we pass the serialize function a user this will be the id made by mongoDB
//     done(null, user.id) //this user info will be passed onto a cookie
// });
//
//
// //when the cookie comes back from the browser lets find what user is lined to that id
// passport.deserializeUser((id, done) => {
//     User.findById(id).then((user) => {
//         done(null, user);
//     });
// });
//
//
// passport.use(
//     new GoogleStrategy({
//         //options for strategy
//         callbackURL: '/auth/google/redirect',
//         clientID: keys.google.clientID,  // clientID in keys.js
//         clientSecret: keys.google.clientSecret  // clientSecret in keys.js
//
//         //accessToken used to alter the users profile (enter their emails, etc)
//         //refreshToken (accessToken expires so this is used to refresh the token)
//         //profile = information that passport gets the users information from google
//         //done is needed when were done with the callback function
//
//     }, (accessToken, refreshToken, profile, done) => {
//
//         //check if user is already in our db
//         User.findOne({googleId: profile.id}).then((currentUser) => {
//             if (currentUser) {
//                 //already have the user in the db
//                 console.log("User is: ", currentUser);
//                 done(null, currentUser);
//             } else {
//                 //if not then create user in db
//                 new User({
//                     username: profile.displayName,
//                     googleId: profile.id
//                 }).save().then((newUser) => {
//                     console.log('new user created: ', newUser);
//                     done(null, newUser); // passing user to db
//                 });   // saves this user to the database
//             }
//         });
//
//
//     })
// );
//
//
//


const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    thumbnail: profile._json.image.url
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);