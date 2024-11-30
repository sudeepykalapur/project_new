import express from 'express';
import { auth } from '../middleware/auth.js';
import * as DonorController from '../controllers/donorController.js'
const router = express.Router();

// router.post('/register', DonorController.register);
// router.get('/profile', auth, DonorController.getProfile);
// router.put('/profile', auth, DonorController.updateProfile);
// router.get('/camps/nearby', auth, DonorController.getNearbyCamps);
// router.post('/camps/:campId/register', auth, DonorController.registerForCamp);

export default router; 