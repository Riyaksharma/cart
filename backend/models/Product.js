const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const prod = mongoose.model("Product", productSchema);

module.exports = prod;
