const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const mainRoutes = require("./routes/main.routes.js");
const usersRoutes = require("./routes/users.routes.js");
const productsRoutes = require("./routes/products.routes.js");
const ordersRoutes = require("./routes/orders.routes.js");
const apiRoutes = require("./api/routes");
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");
const cors = require('cors');
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");


app.use(
  session({
    secret: "ScentZoneSecret",
  })
);
app.use(cors());
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.static(path.join(__dirname, "../public/")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);
app.use("/api", apiRoutes);
app.set("views", path.resolve(__dirname, "./views"));


module.exports = app;
