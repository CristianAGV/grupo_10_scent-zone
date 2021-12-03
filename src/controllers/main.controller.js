//const productsModel = require('../model/index')
const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator')
const showProducts = productsModel.showProducts();


const mainController = {
    home: (req, res) => {
        res.render('home', {products: showProducts})
    },
    cart: (req, res) => {
        res.render('cart')
    },
    questions: (req, res) => {
        res.render('questions')
    },
    

}

module.exports = mainController;