const express = require("express");
//const exphbs = require('express-handlebars');
const morgan = require("morgan");
const indexRoutes = require("./routes/index");
const consumidorRoutes = require("./routes/consumidor");
const ordenRoutes = require("./routes/orden");
const productoRoutes = require("./routes/producto");
const mongoose = require("mongoose")
const app = express();

app.use(express.json());
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("conectado"))
.catch((error)=>console.error(error))

app.set("port", process.env.PORT || 4000);


app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(indexRoutes);
app.use(consumidorRoutes);
app.use(ordenRoutes);
app.use(productoRoutes);

module.exports = app;
