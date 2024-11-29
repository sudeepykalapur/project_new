import express from 'express';
import { auth } from '../middleware/auth.js';
import {
    createRequirement,
    getRequirements,
    updateRequirement
} from '../controllers/clinicController.js';

const router = express.Router();

router.post('/requirements', auth, createRequirement);
router.get('/requirements', auth, getRequirements);
router.put('/requirements/:id', auth, updateRequirement);

export default router;