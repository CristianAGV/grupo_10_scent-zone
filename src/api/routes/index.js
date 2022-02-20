const express = require("express");
const router = express.Router();
const productsApiController = require("../controllers/productsApi.Controller");

router.get("/products", productsApiController.getProducts);

module.exports = router;
