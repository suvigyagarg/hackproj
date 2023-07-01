const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 6
    },
    email:{
        type: String,
        required: true,
        min: 6,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
