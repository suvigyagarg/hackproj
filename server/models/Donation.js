const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    //Veg, Nonveg
    foodItemType:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    pickupDate:{
        type: String,
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
    //Small, Medium, Large,children, adult
    mealSize:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    pickupAddress:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
