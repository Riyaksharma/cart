require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb connection success!!");
  } catch (error) {
    console.error("Connection error");
    process.exit(1);
  }
};

module.exports = connectDB;
