require("dotenv").config();

const products = require("./data/product");
const connectDB = require("./db/mongoose");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data imported succesfully");
    process.exit();
  } catch (error) {
    console.log("Error in import");
    process.exit(1);
  }
};

importData();
