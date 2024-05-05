const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://chaetesh:aetesh3214@cluster0.vn65pxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI, () => {
      console.log("Connected to Mongod Succesfully");
    });
  } catch (error) {
    console.log(error);
  }
};

// This module will get exported
module.exports = connectToMongo;
