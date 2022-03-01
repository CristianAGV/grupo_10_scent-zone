const db = require("../../database/models");

const productsApiModel = {
  showProducts: async () => {
    try {
      let result = await db.products.findAll({ include: ["category"] });
      for (let product of result) {
        product.dataValues.product_image = `http://localhost:3003/assets/products/${product.product_image}`;
        product.dataValues.detail = `http://localhost:3003/api/products/${product.id}`;
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
  }

};

module.exports = productsApiModel;
