import express from 'express';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Add your hospital routes here
// Example: router.get('/inventory', auth, HospitalController.getInventory);

export default router;