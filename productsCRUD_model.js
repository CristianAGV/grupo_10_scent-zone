const path = require('path')
const fs = require('fs')
const productsDb = require('../data/products.json');
const { receiveMessageOnPort } = require('worker_threads');
const productsPath = path.resolve(__dirname, '../data/products.json');

const db = require("../database/models");
const { editProduct } = require("./src/model/productsModel");
const sequelize = db.sequelize;

function calcIndex() {
    let index = 0
    productsDb.forEach(product => {
        if(product.id > index) {
            index = product.id
        }
    })
    return index + 1
}

const productsModel = {

  addProduct: async (newProduct) => {
    try {
      let result = await db.products.create(newProduct);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  showProducts: async () => {
    try {
      let result = await db.products.findAll();
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  showProductsByCategory: async (category) => {
    try {
      let result = await db.products.findAll(category);
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  editProductInfo: async (id) => {
    try {
      let result = await db.products.update(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  editProduct: async (product, productid) => {
    try {
      let result = await db.product.update(product, {
        where: {
          id: productid,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  deleteProduct: async (productid) => {
    try {
      let result = await db.product.destroy(product, {
        where: {
          id: productid,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = productsModel