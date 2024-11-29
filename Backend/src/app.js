const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Routes
const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donor');
const hospitalRoutes = require('./routes/hospital');
const clinicRoutes = require('./routes/clinic');
const emergencyRoutes = require('./routes/emergency');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route middleware
app.use('/api/auth', authRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/hospital', hospitalRoutes);
app.use('/api/clinic', clinicRoutes);
app.use('/api/emergency', emergencyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;