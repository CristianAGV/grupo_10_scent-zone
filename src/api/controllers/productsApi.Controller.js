const productsApiModel = require("../model/productsApi.model");
const productsApiController = {
  getProducts: async function (req, res) {
    try {
      let allProducts = await productsApiModel.showProducts();
      let sweetProducts = allProducts.filter(
        (product) => product.category_id == 1
      );

      let woodenProducts = allProducts.filter(
        (product) => product.category_id == 2
      );
      let citricProducts = allProducts.filter(
        (product) => product.category_id == 3
      );
      let floralProducts = allProducts.filter(
        (product) => product.category_id == 4
      );
      let frutalProducts = allProducts.filter(
        (product) => product.category_id == 5
      );
      return res.status(200).json({
        count: allProducts.length,
        countByCategory: {
          dulces: sweetProducts.length,
          amaderados: woodenProducts.length,
          citricos: citricProducts.length,
          florales: floralProducts.length,
          frutales: frutalProducts.length,
        },
        products: allProducts,
      });
    } catch (error) {
      return res.send(error.message);
    }
  },
};

module.exports = productsApiController;
