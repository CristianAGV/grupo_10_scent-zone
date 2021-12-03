 const express = require('express')
 const router = express.Router()

 router.use('/', require('./main.routes.js'))
 router.use('/products', require('./products.routes.js'))
 router.use('/users', require('./users.routes.js'))


 module.exports = router