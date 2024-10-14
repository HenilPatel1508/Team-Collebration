const mongoose = require("mongoose");
const PATH = "mongodb+srv://henilp1508:dLw8t5sOCKf3wH4A@cluster0.45coh.mongodb.net/Team-Collebration";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(PATH);
    console.log("connect mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDB;
