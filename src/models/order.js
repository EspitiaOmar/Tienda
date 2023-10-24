const mongoose = require("mongoose");
const client = require("user");
const product = require("product")


const orderSchema = mongoose.Schema({
  cliente: {
    type: client,
    required: true,
  },
productos: {
    type: product,
    required: true,
  }

}
);

module.exports = mongoose.model("User", userSchema);
