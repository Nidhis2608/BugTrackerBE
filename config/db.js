const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDatabase = async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log("Databse Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ConnectDatabase };