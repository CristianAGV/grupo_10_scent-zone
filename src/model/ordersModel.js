const db = require('../database/models');

const ordersModel = {
    createOrder: async(order)=>{
        try {
            let createdOrder = await db.orders.create(order);
            console.log(createdOrder);
        } catch (error) {
            console.error(error);
        }
    },
    getOrder: async( idUser ) =>{
        try {
            let orders = await db.orders.findAll({where:{ user_id : idUser}});
            return orders;
            // console.log( orders )
        } catch (error) {
            console.log("a rezar muchachos", error )
        }
    }

}
// ordersModel.getOrder( 15 )


module.exports = ordersModel