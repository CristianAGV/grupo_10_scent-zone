const db = require('../database/models');

const ordersModel = {
    createOrder: async(order)=>{
        try {
            let createdOrder = await db.orders.create(order);
            console.log(createdOrder);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = ordersModel