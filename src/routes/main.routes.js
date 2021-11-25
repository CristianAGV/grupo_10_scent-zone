const express = require('express')
const router = express.Router()
const path = require('path')
// Se pasa como si fuera objeto ya que vamos a pasar varios controladores en un futuro y es mejor que estar creando variables con el require todo el tiempo//
const {controller} = require('../controllers') 
const multer = require('multer')
const {body} = require('express-validator')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/assets'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})



let createProductValidations = [
    body('productName').notEmpty().withMessage('El producto debe tener nombre'),
    body('Brand').notEmpty().withMessage('Debe tener una marca correspondiente'),
    body('price').notEmpty().withMessage('Debes establecer un precio'),
    body('size').notEmpty().withMessage('Debes especificar el volumen que contiene el producto'),
    body('category').exists().withMessage('Debes asignarle una categoria'),
    body('description').notEmpty().withMessage('Debes poner una breve descripcion del producto'),
    body('productImage').custom((value, { req })=> {
        let file = req.file
        let acceptedExtensions = ['.png', '.jpg']
        if(!file) {
            throw new Error('Debes subir la imagen del producto')
        } else {
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Solo se aceptan formatos de imagen ${acceptedExtensions.join(", ")}`)
            }
        }
        return true
    })
]
let upload = multer({ storage })

router.get('/', controller.home)
router.get('/cart', controller.cart)
router.get('/questions', controller.questions)
router.get('/login', controller.login)
router.get('/historial', controller.historial)
router.get('/product-detail/:id', controller.productDetail)
router.get('/product-detail', controller.product)
router.get('/categories', controller.categories)
router.get('/registro', controller.registro)
router.get('/add-products', controller.addProducts)
router.post('/add-products', upload.single('productImage'),createProductValidations ,controller.processAddProduct)
router.get('/products-list', controller.productsList)

// Edit products
// router.get('/edit/:id', controller.editProductPage)
router.get('/products/:id/edit',controller.editProductPage)
router.put('/products/:id/edit', upload.single('productImage'),createProductValidations, controller.editProduct)

// Delete products 
router.delete('/products/:id/delete', controller.deleteProduct)

module.exports = router