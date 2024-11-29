import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['donor', 'hospital', 'clinic'],
        required: true
    },
    bloodType: String,
    phone: String,
    address: String,
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    },
    lastDonation: Date,
    healthConditions: [String],
    eligibleToDonate: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.index({ location: '2dsphere' });

export default mongoose.model('User', userSchema);
