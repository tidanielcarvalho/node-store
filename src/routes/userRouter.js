'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authService = require('../services/authService');

router.post('/create', authService.authorize, controller.createUser);
router.post('/authenticate', controller.userAuth);

module.exports = router;