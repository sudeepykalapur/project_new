const mongoose = require('mongoose');

const donationCampSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number],
        address: String
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    expectedDonors: Number,
    registeredDonors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true });

donationCampSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('DonationCamp', donationCampSchema); 