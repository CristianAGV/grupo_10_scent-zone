const productModel = require('../model')
const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator')
const controller = {
    home: (req, res) => {
        res.render('home')
    },
    cart: (req, res) => {
        res.render('cart')
    },
    questions: (req, res) => {
        res.render('questions')
    },
    login: (req, res) => {
        res.render('login')
    },
    historial: (req, res) => {
        res.render('history')
    },
    product: (req, res) => {
        res.render('product-detail')
    },
    categories: (req, res) => {
        res.render('categories')
    },
    
    registro: (req, res) => {
        res.render('registro')
    },

    editProduct: (req,res) => {
        res.render('edit-product')
    },
    
    addProducts: (req,res) => {
        res.render('add-product')
    },

    processAddProduct: (req, res) => {
        let info = req.body
        let errors = validationResult(req)
        if(errors.isEmpty()) {
            productsModel.addProduct(info)
            res.send('product added')
        } else {
            res.render('add-product', {errors: errors.mapped(), old: info})
        }
        
       
    }
}

module.exports = controller