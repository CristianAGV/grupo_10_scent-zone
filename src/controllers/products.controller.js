const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator');
const db = require('../database/models');
const showProducts = productsModel.showProducts();

const productsController = {
 
    productDetail: async (req, res) => {
    let chosenId = req.params.id;
    try {
      let product = await productsModel.findOne(chosenId);
      console.log(product);
      return res.render('./products-views/product-detail', {product: product})
    } catch (error) {
      console.log(error);
    }  
    },

    categories: async (req, res) => {
        const category = req.params.id;
        const prodByCategory = await productsModel.showProductsByCategory( category )
        res.render('./products-views/categories', { prodByCategory : prodByCategory })
    },

    productsList: async (req, res) =>  {
    try {
        let allProducts = await showProducts
        res.render('./products-views/products-list', {showProducts: allProducts})
    } catch (error) {
        console.log(error);
    }
        
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
          category_id: Number(req.body.category),
          price: Number(req.body.price),
          size: Number(req.body.size),
          status: true, // true por defecto, no se encuentra en add-product.ejs
          product_image: req.file.filename,
        };
        let result = await productsModel.addProduct(newProduct);
        console.log(result);
        res.redirect("/products/products-list");
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

  editProductPage: async (req,res) => {        
    try {
    const idParam = req.params.id;       
    const product = await productsModel.editProductInfo( idParam ); //idParam o id        
    const categories = await db.categories.findAll();
    res.render('./products-views/edit-product',{product, categories})
    } catch (error) {
        console.log(error)
    }
            
},

  editProduct: async function (req, res) {
    let errors = validationResult(req);
      let id = req.params.id;
    try {
      if (errors.isEmpty()) {
        let productToUpdate = {
            product_name: req.body.productName,
            brand: req.body.Brand,
            description: req.body.description,
            gender: req.body.gender,
            category_id: Number(req.body.category),
            price: Number(req.body.price),
            size: Number(req.body.size),
            status: true,
            product_image: req.file.filename,
        };
        let result = await productsModel.editProduct(productToUpdate, id);
        res.redirect("/products/products-list");
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

  deleteProduct: async function (req, res) {
    let productid = req.params.id;
    try {
        let result = await productsModel.deleteProduct(productid);
        res.redirect("/products/products-list");
    } catch (error) {
        console.log(error)
    }
  },
};
module.exports = productsController;
