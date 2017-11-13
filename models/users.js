const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    googleid : String
});

mongoose.model('users', userSchema);