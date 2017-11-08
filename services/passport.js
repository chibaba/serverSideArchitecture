const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys =  require('./config/keys.js')

passport.use(new GoogleStrategy({
  clientID: Keys.googleClientID,
  clientSecret: Keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
  (accessToken, refreshToken, profile, done ) => {
     console.log('accessToken', accessToken);
     console.log('refershToken', refreshToken);
     console.log('profile:', profile); 
}
 )
  );
