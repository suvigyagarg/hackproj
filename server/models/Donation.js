const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    //Veg, Nonveg
    foodItemtype:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    pickupDate:{
        type: Date,
        required: true,
    },
    pickupTime:{
        type: String,
        required: true,
    },
    pickupLocation:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    //Small, Medium, Large,children, adult
    mealSize:{
        type: Number,
        required: true,
    },
}, {timestamps: true});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
