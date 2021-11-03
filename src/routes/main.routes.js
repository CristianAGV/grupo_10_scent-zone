const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.home)
router.get('/cart', mainController.cart)
router.get('/questions', mainController.questions)


module.exports = router