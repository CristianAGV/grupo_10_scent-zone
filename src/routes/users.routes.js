const express = require('express');
const router = express.Router();
const path = require('path');
const {usersController, mainController} = require('../controllers/index');


router.get('/login', usersController.login)
router.get('/historial', usersController.historial)
router.get('/registro', usersController.registro)

module.exports = router