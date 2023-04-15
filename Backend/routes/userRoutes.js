const express = require('express');
const { registerUser } = require('../Controller/userController');
const { loginUser } = require('../Controller/userController');
const { getMe } = require('../Controller/userController');
const protect = require('../middleware/authorizationMiddleware');
const router = express.Router();

router.post('/register',protect, registerUser);
router.post('/login',protect, loginUser )
router.get('/getuser',protect, getMe)


module.exports = router;