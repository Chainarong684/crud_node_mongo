const UserDB = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { username, password, email, gender, phone, date } = req.body;

    UserDB.create(
      { username, password, email, gender, phone, date },
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
    res.json({ status: "done", data: req.body });
  } catch (error) {
    console.log(error);
  }
};

const findAllUser = async (req, res) => {
  const users = await UserDB.find();
  console.log(users);
};

module.exports = { createUser, findAllUser };
