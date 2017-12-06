const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys = require('../config/Keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) =>{
  done(null, user.id);

});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  })

})

passport.use(
  new GoogleStrategy(
  {
  clientID: Keys.googleClientID,
  clientSecret: Keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
},
    async (accessToken, refreshToken, profile, done ) => {
     const existingUser = await User.findOne({googleId: profile.id})
    
      if(existingUser) {
        // we already have a given record with the profile ID
         return done(null, existingUser);
      }
        // we dont have have a record with this user Id, hence make a record
       const user =  await new User({ googleId: profile.id}).save()
        done(null, user);
      }
 )
  );
