const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    googleid : String,
    credits: { type: Number, default: 10}
});

mongoose.model('users', userSchema);