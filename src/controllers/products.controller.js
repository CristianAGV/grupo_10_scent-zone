const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator')
const showProducts = productsModel.showProducts();

const productsController = {
    productDetail: (req, res) => {
        let chosenId = req.params.id;
        res.render('./products-views/product-detail', {showProducts: showProducts, chosenId})
    },
    categories: (req, res) => {
        res.render('./products-views/categories')
    },
    productsList: (req, res) => {
        res.render('./products-views/products-list', {showProducts: showProducts})
    },

    addProducts: (req,res) => {
        res.render('./products-views/add-product')
    },

    processAddProduct: (req, res) => {
        let info = req.body
        let errors = validationResult(req)
        if(errors.isEmpty()) {
            productsModel.addProduct(info, req.file.filename)
            res.redirect('./products-views/products-list')
        } else {
            res.render('./products-views/add-product', {errors: errors.mapped(), old: info})
        }   
    },

    editProductPage: (req,res) => {        
        const idParam = req.params.id;       
        const product = productsModel.editProductInfo( idParam );        
        res.render('./products-views/edit-product',{product})        
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
            res.redirect("./products-views/products-list");
        } else {
            res.render('./products-views/edit-product', {errors: errors.mapped(), old: info})
        }   
    },

    deleteProduct: (req, res ) => {
        const idParam = req.params.id;
        productsModel.deleteProduct( idParam )
        res.redirect("./products-views/products-list");
    }
}

module.exports = productsController;