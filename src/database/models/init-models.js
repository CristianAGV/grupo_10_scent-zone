var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _orders = require("./orders");
var _products = require("./products");
var _users = require("./users");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

//  products.belongsTo(categories, { as: "category", foreignKey: "category_id"});
//  categories.hasMany(products, { as: "products", foreignKey: "category_id"});
  orders.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(orders, { as: "orders", foreignKey: "product_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});

  return {
    categories,
    orders,
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
