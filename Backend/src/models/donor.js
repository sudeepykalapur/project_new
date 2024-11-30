import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    lastDonationDate: {
        type: Date
    }
}, {
    timestamps: true
});

const Donor = mongoose.model('Donor', donorSchema);

export default Donor; 