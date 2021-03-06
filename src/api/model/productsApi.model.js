const db = require("../../database/models");

const productsApiModel = {
  showProducts: async () => {
    try {
      let result = await db.products.findAll({ include: ["category"] });
      for (let product of result) {
        product.dataValues.product_image = `https://scent-zone.herokuapp.com/assets/products/${product.product_image}`;
        product.dataValues.detail = `https://scent-zone.herokuapp.com/api/products/${product.id}`;
      }

      return result;
    } catch (error) {
      throw new Error("Error trying to connect to database");
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

  findPagination: async (chosenPage) => {
    try {
      if (chosenPage === 1) {
        let result = await db.products.findAll({
          include: ["category"],
          limit: 10,
        });
        for (let product of result) {
          product.dataValues.product_image = `https://scent-zone.herokuapp.com/assets/products/${product.product_image}`;
          product.dataValues.detail = `https://scent-zone.herokuapp.com/api/products/${product.id}`;
        }
        return result;
      } else {
        let result = await db.products.findAll({
          include: ["category"],
          limit: 10,
          offset: chosenPage * 10 - 10,
        });

        for (let product of result) {
          product.dataValues.product_image = `https://scent-zone.herokuapp.com/assets/products/${product.product_image}`;
          product.dataValues.detail = `https://scent-zone.herokuapp.com/api/products/${product.id}`;
        }
        return result;
      }
    } catch (error) {
      throw new Error("Sorry, we are having problems, come later");
    }
  },
};

module.exports = productsApiModel;
