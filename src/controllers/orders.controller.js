const db = require('../database/models');
const ordersModel = require('../model/ordersModel');

const ordersController = {
    createOrder: async (req, res) => {
        try {
            let product_id = Number(req.query.product);
        let user_id = req.session.userLogged.id;

        let order = {
            product_id: product_id,
            user_id: user_id,
            quantity: 1,
        }

        await ordersModel.createOrder(order)
        res.redirect('/')


        } catch (error) {
            console.error(error);
        }
        
    }
}

module.exports = ordersController;