const UserDB = require("../models/userModel");

const createUser = (req, res) => {
  console.log(req.body);
  res.json({ status: "done" });
};

const findAllUser = async (req, res) => {
  const users = await UserDB.find();
  console.log(users);
};

module.exports = { createUser, findAllUser };
