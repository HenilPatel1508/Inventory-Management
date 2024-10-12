const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://henilp1508:dLw8t5sOCKf3wH4A@cluster0.45coh.mongodb.net/Inventory-Management";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;