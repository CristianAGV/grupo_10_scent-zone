//const productsModel = require('../model/index')
const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator')
const showProducts = productsModel.showProducts();


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
   
    productsList: (req, res) => {
        res.render('products-list', {showProducts: showProducts})
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
    },

    editProductPage: (req,res) => {
        // res.render('edit-product')
        const idParam = req.params.id;
        // console.log(idParam)
        const product = productsModel.editProductInfo( idParam );
        // console.log( product )
        res.render('edit-product',{product})
        // res.render('edit-product')
    },

    editProduct: ( req, res ) => {
        let info=req.body;
        let errors = validationResult(req);
        console.log( errors )
        if(errors.isEmpty()) {
            const idParam = req.params.id;
            console.log('controladoe', idParam)
            const data = {
                ...req.body,
                productImage: req.file.filename
            }
            productsModel.editProduct( idParam, data );
            res.redirect("/products-list");
        } else {
            res.render('edit-product', {errors: errors.mapped(), old: info})
        }   
    },

    deleteProduct: (req, res ) => {
        const idParam = req.params.id;
        productsModel.deleteProduct( idParam )
        res.redirect("/products-list");
    }



}

module.exports = controller