const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    //Veg, Nonveg
    foodItemtype:{
        type: Boolean,
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
    donationCenter:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DonationCenter',
        required: true,
    },
    //Small, Medium, Large,children, adult
    mealSize:{
        type: Number,
        required: true,
    },
    //Breakfast, Lunch, Dinner
    mealType:{
        type: String,
        required: true,
    },
}, {timestamps: true});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
