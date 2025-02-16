//IMPORT
const express = require('express');
const {registerUser, loginUser} = require('../controllers/authControllers')
const router = express.Router();

//User registration
router.post('/register', registerUser);

//user login
router.post('/login',loginUser);

module.exports = router;