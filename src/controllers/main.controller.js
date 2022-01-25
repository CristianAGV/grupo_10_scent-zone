//const productsModel = require('../model/index')
const productsModel = require('../model/productsModel-old')
const {validationResult} = require('express-validator')
// const showProducts = ;


const mainController = {
    home: async (req, res) => {
        let products = await productsModel.showProducts();
        res.render('home', {products: products, user: req.session.userLogged })
    },
    cart: (req, res) => {
        res.render('cart')
    },
    questions: (req, res) => {
        res.render('questions')
    },
    

}

module.exports = mainController;