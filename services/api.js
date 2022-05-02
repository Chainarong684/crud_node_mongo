const UserDB = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { username, password, email, gender, phone, date } = req.body;
    const user = new UserDB({
      username,
      password,
      email,
      gender,
      phone,
      date,
    });
    await user.save((err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send({
          status: "bad",
          error: err,
        });
      } else {
        res.status(200).send({
          status: "good",
          data: result,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const findAllUser = async (req, res) => {
  try {
    const user = await UserDB.find();
    res.status(200).send({
      status: "good",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const findUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserDB.findById(id);
    if (!user) {
      res.status(400).send({
        status: "bad",
        msg: "User ID not found",
      });
    } else {
      res.status(200).send({
        status: "good",
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserDB.findById(id);
    if (!user) {
      res.status(400).send({
        status: "bad",
        msg: "User ID not found",
      });
    } else {
      const newUser = await UserDB.findByIdAndUpdate(user._id, req.body, {
        new: true,
      });
      res.status(200).send({
        status: "good",
        data: newUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  findAllUser,
  findUserById,
  updateUser,
  deleteUser,
};
