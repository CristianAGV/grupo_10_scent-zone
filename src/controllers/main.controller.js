//const productsModel = require('../model/index')
const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator')
const showProducts = productsModel.showProducts();


const mainController = {
    home: async (req, res) => {
        try {
            let products = await productsModel.showProducts()
            res.render('home', {products, user: req.session.userLogged })
        } catch (error) {
            res.send(error)
        }
        
    },
    cart: (req, res) => {
        res.render('cart', {user: req.session.userLogged})
    },
    questions: (req, res) => {
        res.render('questions')
    },
    errorCatch: (req, res) => {
        res.render('comeBack')
    }
    

}

module.exports = mainController;