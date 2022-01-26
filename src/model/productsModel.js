const db = require("../database/models");
// const { editProduct } = require("./src/model/productsModel");
const sequelize = db.sequelize;

const productsModel = {

  showProducts: async () => {
    try {
      let result = await db.Product.findAll({
          include:[{association:"category"}]
      });
      console.log( result )
      return result;
    } catch (error) {
      console.log(error);
    }
  },

//   editProduct: async (product, productid) => {
//     try {
//       let result = await db.product.update(product, {
//         where: {
//           id: productid,
//         },
//       });
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   },

//   deleteProduct: async (productid) => {
//     try {
//       let result = await db.product.destroy(product, {
//         where: {
//           id: productid,
//         },
//       });
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   },
};


module.exports = productsModel