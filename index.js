const express = require('express');
const mongoose = require('mongoose');
const Keys = require('./config/keys')
require('./models/users');
 require('./services/passport')


 mongoose.connect('keys.mongoURI');

 const app = express();

 require('./routes/authRoutes') (app);


const PORT = process.env.PORT || 5000
app.listen(PORT);
