const db = require("../database/models");

const ordersModel = {
  createOrder: async (order) => {
    try {
      let createdOrder = await db.orders.create(order);
      console.log(createdOrder);
    } catch (error) {
      console.error(error);
    }
  },

  getUserOrders: async (id) => {
    try {
      let ordersInDatabase = await db.orders.findAll({
        where: { user_id: id },
      });
      let idOfProducts = ordersInDatabase.map((order) => order.product_id);
      const transformedProducts = await Promise.all(
        idOfProducts.map(async (id) => {
          return await db.products.findByPk(id);
        })
      );
      return transformedProducts;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

// ordersModel.getUserOrders(11);

module.exports = ordersModel;
