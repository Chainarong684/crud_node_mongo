const express = require("express");
const env = require("dotenv");

const router = require("./routes/router");
const connectDB = require("./database/connection");

const app = express();
env.config({ path: "./server.env" });
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MONGO ATLAS
// connectDB(process.env.MONGO_ATLAS_URI);
// MONGO LOCAL
connectDB(process.env.MONGO_LOCAL_URI);

app.use("/", router);
