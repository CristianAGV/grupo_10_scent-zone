const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.home)
router.get('/cart', mainController.cart)
router.get('/questions', mainController.questions)
router.get('/login', mainController.login)
router.get('/historial', mainController.historial)
router.get('/product-detail', mainController.product)
router.get('/categories', mainController.product)


module.exports = router