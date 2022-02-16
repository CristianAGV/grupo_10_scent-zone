const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator')
const showProducts = productsModel.showProducts();

const productsModel = require("./src/model/productsModel");

const productsController = {

    productDetail: async (req, res) => {
    let chosenId = req.params.id;
    try {
      let product = await productsModel.findOne(chosenId);
      return res.render('./products-views/product-detail', {product: product})
    } catch (error) {
      console.log(error);
    }  
    },

    categories: (req, res) => {
        const category = req.params.name;
        const prodByCategory = productsModel.showProductsByCategory( category )
        res.render('./products-views/categories', { prodByCategory : prodByCategory })
    },

    productsList: (req, res) => {
        res.render('./products-views/products-list', {showProducts: showProducts})
    },
    
    addProducts: (req,res) => {
        res.render('./products-views/add-product')
    },

    processAddProduct: async function (req, res) { // ¿addProduct or processAddProduct?
    try {
      let errors = validationResult(req);

      if (errors.isEmpty()) {
        let newProduct = {
          product_name: req.body.productName,
          brand: req.body.Brand, // B en mayúscula en el view
          description: req.body.description,
          gender: req.body.gender,
          category_id: req.body.category,
          price: req.body.price,
          size: req.body.size,
          status: true, // true por defecto, no se encuentra en add-product.ejs
          product_image: req.body.productImage,
        };
        let result = await productsModel.addProduct(newProduct);
        console.log(result);
        res.redirect("./products-views/products-list");
      } else {
        return res.render("./products-views/add-product", {
          errors: errors.mapped(),
          old: req.body,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  editProductPage: (req,res) => {        
    const idParam = req.params.id;       
    const product = productsModel.editProductInfo( idParam ); //idParam o id        
    res.render('./products-views/edit-product',{product})        
},

  editProduct: async function (req, res) {
    try {
      let errors = validationResult(req);

      if (errors.isEmpty()) {
        let editProduct = {
          product_name: req.body.productName,
          brand: req.body.Brand,
          description: req.body.description,
          gender: req.body.gender,
          category_id: req.body.category,
          price: req.body.price,
          size: req.body.size,
          status: true,
          product_image: req.body.productImage,
        };
        let result = await productsModel.editProduct(editProduct);
        console.log(result);
        res.redirect("./products-views/products-list");
      } else {
        return res.render("./products-views/add-product", {
          errors: errors.mapped(),
          old: req.body,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  deleteProduct: async function (productid) {
    productsModel.deleteProduct(productid);
    res.redirect("./products-views/products-list");
  },
};
module.exports = productsController;