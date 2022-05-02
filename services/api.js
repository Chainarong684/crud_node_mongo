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

const findUserById = async (id) => {
  try {
    const user = await UserDB.findById(id);
    if (!user) {
      return { status: "bad", msg: "User with ID not found" };
    } else {
      return { status: "good", data: user };
    }
  } catch (error) {
    console.log(error);
  }
};

const findUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await findUserById(id);
    if (userData.status === "good") {
      res.status(200).send(userData)
    } else {
      res.status(400).send(userData)
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await findUserById(id);
    if (userData.status === "good") {
      const newUser = await UserDB.findByIdAndUpdate(userData.data._id, req.body, {
        new: true,
      });
      res.status(200).send({
        status: "good",
        data: newUser,
      });
    } else {
      res.status(400).send(userData);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await findUserById(id);
    if (userData.status === "good") {
      const user = await UserDB.findByIdAndDelete(userData.data._id);
      res.status(200).send({
        status: "good",
        data: user,
      });
    } else {
      res.status(400).send(userData);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  findAllUser,
  findUser,
  updateUser,
  deleteUser,
};
