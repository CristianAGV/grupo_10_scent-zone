const path = require("path");
const { receiveMessageOnPort } = require("worker_threads");
const productsPath = path.resolve(__dirname, "../data/products.json");

const db = require("../database/models");
const sequelize = db.sequelize;

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
      let result = await db.products.findAll({ include: ["category"] });
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  findOne: async (chosenId) => {
    try {
      let result = await db.products.findByPk(chosenId);
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  showProductsByCategory: async (category) => {
    try {
      let result = await db.products.findAll({
        where: { category_id: category },
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  editProductInfo: async (id) => {
    try {
      let result = await db.products.findByPk(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  editProduct: async (product, productid) => {
    try {
      let result = await db.products.update(product, {
        where: { id: productid },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  deleteProduct: async (productid) => {
    try {
      let result = await db.products.destroy({ where: { id: productid } });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = productsModel;
