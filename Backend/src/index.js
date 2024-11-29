// src/ index.js 
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import authRoutes from './routes/auth.js';
import donorRoutes from './routes/donor.js';
import hospitalRoutes from './routes/hospital.js';
import clinicRoutes from './routes/clinic.js';
import emergencyRoutes from './routes/emergency.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/hospital', hospitalRoutes);
app.use('/api/clinic', clinicRoutes);
app.use('/api/emergency', emergencyRoutes);

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed!", err);
    });