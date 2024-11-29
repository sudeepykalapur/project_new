const mongoose = require('mongoose');

const bloodStockSchema = new mongoose.Schema({
    bloodType: {
        type: String,
        required: true
    },
    units: {
        type: Number,
        required: true,
        min: 0
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('BloodStock', bloodStockSchema); 