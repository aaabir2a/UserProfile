const express = require('express');
const { registerUser, loginUser, getUserProfile, getAllUsers, updateUserProfile, deleteUser } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticate, getUserProfile);
router.get('/', authenticate, getAllUsers);
router.put('/profile', authenticate, updateUserProfile);
router.delete('/profile', authenticate, deleteUser);

module.exports = router;
