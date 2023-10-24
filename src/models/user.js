const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  dni: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  cel: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
