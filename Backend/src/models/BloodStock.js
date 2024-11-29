import mongoose from 'mongoose';

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

export default mongoose.model('BloodStock', bloodStockSchema); 