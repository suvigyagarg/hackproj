const mongoose = require('mongoose');

const donationCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  //reconsider this
  typeOfNgo:{
    type: String,
    required: true,
  }

},{timestamps: true});

const DonationCenter = mongoose.model('DonationCenter', donationCenterSchema);

module.exports = DonationCenter;
