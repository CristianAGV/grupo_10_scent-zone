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

  getProductDetails: async function (req, res) {
    let chosenId = req.params.id;
    try {
      let product = await productsApiModel.findOne(chosenId);
      let imageURL = `http://localhost:3003/assets/products/${product.product_image}`;
      return res.status(200).json({
        product: product,
        productImage: imageURL,
      });
    } catch (error) {
      return res.send(error.message);
    }
  },

  getProductsByPage: async function (req, res) {
    let chosenPage = req.params.page;
    try {
      let products = await productsApiModel.findPagination(Number(chosenPage));
      return res.status(200).json({
        products: products,
      });
    } catch (error) {
      return res.send(error.message);
    }
  },
};

module.exports = productsApiController;
