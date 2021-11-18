const express = require('express')
const router = express.Router()
// Se pasa como si fuera objeto ya que vamos a pasar varios controladores en un futuro y es mejor que estar creando variables con el require todo el tiempo//
const {controller} = require('../controllers') 

router.get('/', controller.home)
router.get('/cart', controller.cart)
router.get('/questions', controller.questions)
router.get('/login', controller.login)
router.get('/historial', controller.historial)
router.get('/product-detail', controller.product)
router.get('/categories', controller.product)
router.get('/registro', controller.registro)
router.get('/edit-product', controller.editProduct)
router.get('/add-products', controller.addProducts)


module.exports = router