const express = require('express');
const router = express.Router();
const path = require('path');
const {usersController, mainController} = require('../controllers/index');
const {body} = require("express-validator");

let userValidations = [
    body('email').notEmpty().withMessage('Debes ingresar un email'),
    body('email').isEmail(),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
]


router.get('/login', usersController.login)
router.get('/historial', usersController.historial)
router.get('/registro', usersController.registro);

router.post('/authLogin', userValidations, usersController.processLogin)

module.exports = router