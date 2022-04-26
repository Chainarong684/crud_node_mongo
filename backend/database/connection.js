const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_ATLAS_URI || process.env.MONGO_LOCAL_URI,
      () => {
        console.log(`MongoDB connecting to ${mongoose.connection.host}
        Database name ${mongoose.connection.name}`);
      }
    );
  } catch (error) {
    throw error;
  }
};

module.exports = connectDB;
