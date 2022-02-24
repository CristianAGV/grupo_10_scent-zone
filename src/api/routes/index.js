const express = require("express");
const router = express.Router();
const productsApiController = require("../controllers/productsApi.Controller");
const usersApiController = require("../controllers/usersApiController");


//products api routes
router.get("/products", productsApiController.getProducts);

// users list - api endpoint 
router.get("/users", usersApiController.getAllUsers)

//users api routes
router.get("/users/:id", usersApiController.getUserById);



module.exports = router;
