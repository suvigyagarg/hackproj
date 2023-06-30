const Donation = require('../models/Donation');
const router = require('express').Router();
const authenticate = require('../authenticate');

router.get('/', authenticate, async (req, res) => {
    try {
        const donations = await Donation.find({user: req.user});
        res.status(200).json(donations);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.post('/', authenticate, async (req, res) => {
    const {foodItem, quantity, pickupDate, pickupTime, pickupLocation} = req.body;
    try {
        const donation = new Donation({
            foodItem,
            quantity,
            pickupDate,
            pickupTime,
            pickupLocation,
            user: req.user,
            donationCenter: req.donationCenter,
            mealSize,
            mealType,
        });
        await donation.save();
        res.status(200).json('Donation created successfully');
    } catch (err) {
        res.status(500).json(err);
    }
}
);

module.exports = router;