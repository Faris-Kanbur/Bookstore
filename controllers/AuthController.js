const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
 

  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password,salt);
  console.log("newPassword :" , newPassword);

  const user = new User({
    firstName,
    lastName,
    email,
    password, newPassword, //crypted password
  });

  await user.save();


  res.send("Register Completed.");
};

exports.authLogin = (req, res) => {

  res.send("Login Completed");
};