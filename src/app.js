const express = require("express");
const { create }= require("express-handlebars");
const path =require ("path");
const morgan = require("morgan");

const indexRoutes = require("./routes/index");
const consumidorRoutes = require("./routes/consumidor");
const ordenRoutes = require("./routes/orden");
const productoRoutes = require("./routes/producto");

const app = express();

app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");
app.use(express.json());
require("dotenv").config();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


app.use(indexRoutes);
app.use(consumidorRoutes);
app.use(ordenRoutes);
app.use(productoRoutes);

module.exports = app;
