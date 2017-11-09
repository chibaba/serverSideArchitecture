const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    goodleId: String
});

mongoose.model('users', userSchema);