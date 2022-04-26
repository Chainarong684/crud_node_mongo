const mongoose = require("mongoose");

const connectDB = async (URI) => {
  try {
    await mongoose.connect(URI, () => {
      console.log(`MongoDB is running on ${mongoose.connection.host}
        Database name ${mongoose.connection.name}`);
    });
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

mongoose.connection.on("disconnected", () => {
  console.log("Lost connection to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log(`Failed to connect MongoDB ${error}`);
  connectDB(process.env.MONGO_LOCAL_URI);
});

module.exports = connectDB;
