const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    max: 10,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const UserDB = mongoose.model("User", userSchema);

module.exports = UserDB;
