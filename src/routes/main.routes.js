const express = require('express')
const router = express.Router()
// Se pasa como si fuera objeto ya que vamos a pasar varios controladores en un futuro y es mejor que estar creando variables con el require todo el tiempo//
const {controller} = require('../controllers') 

const {body} = require('express-validator')

let createProductValidations = [
    body('productName').notEmpty().withMessage('El producto debe tener nombre'),
    body('Brand').notEmpty().withMessage('Debe tener una marca correspondiente'),
    body('price').notEmpty().withMessage('Debes establecer un precio'),
    body('size').notEmpty().withMessage('Debes especificar el volumen que contiene el producto'),
    body('category').exists().withMessage('Debes asignarle una categoria')
]

router.get('/', controller.home)
router.get('/cart', controller.cart)
router.get('/questions', controller.questions)
router.get('/login', controller.login)
router.get('/historial', controller.historial)
router.get('/product-detail/:id', controller.productDetail)
router.get('/categories', controller.categories)
router.get('/registro', controller.registro)
router.get('/edit-product', controller.editProduct)
router.get('/add-products', controller.addProducts)
router.post('/add-products', createProductValidations ,controller.processAddProduct)
router.get('/products-list', controller.productsList)


module.exports = router