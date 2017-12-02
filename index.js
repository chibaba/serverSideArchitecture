const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser = require('body-parser');
const Keys = require('./config/keys');
require('./models/users');
 require('./services/passport')
 
 mongoose.connect(Keys.mongoURI);
 
 const app = express();
app.use(bodyParser.json())
 app.use(
   cookieSession({
     maxAge: 30 * 24 * 60 * 60 * 1000,
     keys: [Keys.cookieKey]
   })
 );

 app.use(passport.initialize());
 app.use(passport.session());

 require('./routes/authRoutes') (app);
 require('./routes/billingRoutes') (app);
 if (process.env.NODE_ENV=== production) {
   // Express will serve up production assets
   //like our main.js file and main.css file
   app.use(express.static('client/build'));

   //Express will serve up the index.html file
   //if it dosent recognise the route
   const path = require('path');
   app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirnanme, 'client', 'build', 'index.html'));
   })
 }


const PORT = process.env.PORT || 5000
app.listen(PORT);
