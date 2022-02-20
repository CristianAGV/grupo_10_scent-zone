const db = require("../../database/models");

const productsApiModel = {
  showProducts: async () => {
    try {
      let result = await db.products.findAll({ include: ["category"] });
      for (let product of result) {
        product.dataValues.detail = `http://localhost:3000/api/products/${product.id}`;
      }

      return result;
    } catch (error) {
      throw new Error("Error trying to connect to database");
    }
  },
};

module.exports = productsApiModel;
