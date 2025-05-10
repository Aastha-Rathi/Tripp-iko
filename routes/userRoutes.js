const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

// Protected Routes (JWT required)
router.put('/profile', jwtMiddleware, userController.updateProfile);
router.get('/profile', jwtMiddleware, userController.getProfile);
router.post('/add-travel-plan', jwtMiddleware, userController.addTravelPlan);
router.get('/search', userController.searchByDestination);

module.exports = router;
