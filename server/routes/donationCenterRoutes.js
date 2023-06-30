const router = require('express').Router();
const DonationCenter = require('../models/DonationCenter');


router.get('/', async (req, res) => {
    const donationCenters = await DonationCenter.find({});
    res.json(donationCenters);
    }
);

router.post('/', async (req, res) => {
    try{
        const {name,address,contactNumber}  = req.body;
        const donationCenter = new DonationCenter({name,address,contactNumber});
        const newDonationCenter = await donationCenter.save();
        res.status(200).json(newDonationCenter);

    }catch(err){
        res.status(500).json(err);
    }
}
);

module.exports = router;


