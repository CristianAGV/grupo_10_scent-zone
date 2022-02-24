//const productsModel = require('../model/index')
const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator')
const showProducts = productsModel.showProducts();

const db = require('../database/models');
const ordersModel = require('../model/ordersModel');


const mainController = {
    home: async (req, res) => {
        try {
            let products = await productsModel.showProducts()
            res.render('home', {products, user: req.session.userLogged })
        } catch (error) {
            res.send(error)
        }
        
    },
    cart: async (req, res) => {

        // console.log("ENNNTREEE")

        try {
            let orders = await ordersModel.getOrder( req.session.userLogged.id );
            console.log( 'ooorrderrrs', orders)
            

            let products = await orders.map( async(order) => {await productsModel.findOne( order.dataValues.product_id )})
            
            // await orders.forEach( async(order)  => {                
            //     let product = await productsModel.findOne( order.dataValues.product_id );
            //     console.log("PROOODUUUCT ", product)                  
            //     products.push( product )
            // });
            // console.log("LOS FUCKING PRODUCTS", products)
            console.log("POOOORRRSDSD",products)
            res.render('cart', {user: req.session.userLogged, orders:products})

            // console.log( products )
        } catch (error) {
            console.error('No le hagas caso nunca mas a Cristian y Salma', error )
        }
    },
    questions: (req, res) => {
        res.render('questions')
    },
    errorCatch: (req, res) => {
        res.render('comeBack')
    }
    

}

module.exports = mainController;