//const productsModel = require('../model/index')
const productsModel = require("../model/productsModel");
const ordersModel = require("../model/ordersModel");
const { validationResult } = require("express-validator");
const showProducts = productsModel.showProducts();

const db = require("../database/models");
// const ordersModel = require('../model/ordersModel');

const mainController = {
  home: async (req, res) => {
    try {
      let products = await productsModel.showProducts();
      res.render("home", { products, user: req.session.userLogged });
    } catch (error) {
      res.send(error);
    }
  },
  cart: async (req, res) => {
    try {
      let userId = Number(req.session.userLogged.id);
      let productsOfUser = await ordersModel.getUserOrders(userId);
      let total = 0;
      if (productsOfUser && productsOfUser.length) {
        productsOfUser.forEach((product) => {
          total = total + product.price;
        });
      }

      res.render("cart", {
        user: req.session.userLogged,
        products: productsOfUser,
        total: total,
      });
    } catch (error) {
      res.render("comeback");
    }
  },
  questions: (req, res) => {
    res.render("questions", { user: req.session.userLogged });
  },
  errorCatch: (req, res) => {
    res.render("comeBack", { user: req.session.userLogged });
  },
};

module.exports = mainController;
