const express = require('express');
const router = express.Router();
const path = require('path');
const {usersController} = require('../controllers/index');
const {body} = require("express-validator");
const multer = require('multer');

let userValidations = [
    body('email').notEmpty().withMessage('Debes ingresar un email'),
    body('email').isEmail(),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
]

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        let imgFolder = path.resolve(__dirname, '../public/images/assets/users');
        cb(null, imgFolder);
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

let upload = multer({storage: storage});


router.get('/login', usersController.login)
router.get('/historial', usersController.historial)
router.get('/registro', usersController.registro);

router.post('/authLogin', userValidations, usersController.processLogin)
router.post('/registrarse', upload.single('image'), usersController.create)

module.exports = router