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
    productDetail: (req, res) => {
        let chosenId = req.params.id;
        res.render('product-detail', {showProducts: showProducts, chosenId})
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
            productsModel.addProduct(info, req.file.filename)
            res.redirect('/products-list')
        } else {
            res.render('add-product', {errors: errors.mapped(), old: info})
        }   
    },

    editProductPage: (req,res) => {        
        const idParam = req.params.id;       
        const product = productsModel.editProductInfo( idParam );        
        res.render('edit-product',{product})        
    },

    editProduct: ( req, res ) => {
        let info=req.body;
        let errors = validationResult(req);
        
        if(errors.isEmpty()) {
            const { price, size, Brand, ...resto } = req.body;
             
            const idParam = req.params.id;           
            const data = {                
                ...resto,
                Brand: Brand,
                price: parseFloat( price ),
                size: parseFloat( price ),
                stock:20,
                status:true,                    
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