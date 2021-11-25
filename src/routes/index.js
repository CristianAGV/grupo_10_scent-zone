const express = require('express')
const router = express.Router()

router.use('/', require('./main.routes.js'))
// router.use('/product/edit',require('./edit-products.routes'))

module.exports = router