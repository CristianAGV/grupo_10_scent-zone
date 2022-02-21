const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller');
const visitorsMiddleware = require('../middlewares/visitorsMiddleware');


router.post('/',visitorsMiddleware, ordersController.createOrder);


module.exports = router;