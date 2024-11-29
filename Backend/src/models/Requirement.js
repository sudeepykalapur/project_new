import mongoose from 'mongoose';

const requirementSchema = new mongoose.Schema({
    bloodType: {
        type: String,
        required: true
    },
    units: {
        type: Number,
        required: true,
        min: 1
    },
    requiredBy: {
        type: Date,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    additionalNotes: String,
    status: {
        type: String,
        enum: ['pending', 'fulfilled', 'cancelled'],
        default: 'pending'
    },
    clinic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Requirement', requirementSchema);