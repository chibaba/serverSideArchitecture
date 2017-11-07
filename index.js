const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy())

//clientId: 150217203825-iihcm0v50kn81rjhe6lqqpptprkfa8u1.apps.googleusercontent.com
//clientSecret:-LOsWt0gWjn_u8XxaimBj-3i

app.get('/', (req, res) => {
  res.send ({hi: 'there'})
});


const PORT = process.env.PORT || 5000
app.listen(PORT);

