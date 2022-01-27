const express = require('express');
const router = express.Router();
const path = require('path');
// Se pasa como si fuera objeto ya que vamos a pasar varios controladores en un futuro y es mejor que estar creando variables con el require todo el tiempo//
const {mainController} = require('../controllers/index');
const visitorsMiddleware = require('../middlewares/visitorsMiddleware');

router.get('/', mainController.home)
router.get('/cart', visitorsMiddleware, mainController.cart)
router.get('/questions', mainController.questions)
router.get('/comeBack', mainController.errorCatch)




module.exports = router
