const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const DonorController = require('../controllers/DonorController');

router.post('/register', DonorController.register);
router.get('/profile', auth, DonorController.getProfile);
router.put('/profile', auth, DonorController.updateProfile);
router.get('/camps/nearby', auth, DonorController.getNearbyCamps);
router.post('/camps/:campId/register', auth, DonorController.registerForCamp);

module.exports = router; 