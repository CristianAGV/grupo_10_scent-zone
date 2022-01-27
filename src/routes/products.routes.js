const express = require('express');
const router = express.Router();
const path = require('path');
const {productsController, mainController} = require('../controllers/index');
const visitorsMiddleware = require('../middlewares/visitorsMiddleware');
const isAdminMiddleware = require('../middlewares/isAdminMiddleware')


const multer = require('multer')
const {body} = require('express-validator')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/assets/products'))
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

let updateProductValidations = [
    body('productName').notEmpty().withMessage('El producto debe tener nombre'),
    body('Brand').notEmpty().withMessage('Debe tener una marca correspondiente'),
    body('price').notEmpty().withMessage('Debes establecer un precio'),
    body('size').notEmpty().withMessage('Debes especificar el volumen que contiene el producto'),
    body('category').exists().withMessage('Debes asignarle una categoria'),
    body('description').notEmpty().withMessage('Debes poner una breve descripcion del producto'),
    body('productImage').custom((value, { req })=> {
        let file = req.file
        let acceptedExtensions = ['.png', '.jpg']
        if(file) {
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Solo se aceptan formatos de imagen ${acceptedExtensions.join(", ")}`)
            }
        }
        return true
    })
]

let upload = multer({ storage })

router.get('/', mainController.home)

router.get('/product-detail/:id', productsController.productDetail)
router.get('/categories/:id', productsController.categories)

router.get('/edit-product', visitorsMiddleware, isAdminMiddleware, productsController.editProduct)
router.get('/add-products', visitorsMiddleware, isAdminMiddleware,productsController.addProducts)
router.post('/add-products', upload.single('productImage'),createProductValidations ,productsController.processAddProduct)
router.get('/products-list', visitorsMiddleware, isAdminMiddleware, productsController.productsList)

// router.get('/edit/:id', controller.editProductPage)
router.get('/:id/edit', visitorsMiddleware, isAdminMiddleware,productsController.editProductPage)
router.put('/edit/:id', upload.single('productImage'),updateProductValidations, productsController.editProduct)

// Delete products 
router.delete('/:id/delete', productsController.deleteProduct)

module.exports = router 