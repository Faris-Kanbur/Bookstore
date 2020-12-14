const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

//validator
const validationErr = validationResult(req);

if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
}





// allready exist user
const userData = await User.findOne({email});

if (userData) {
    return res.status(400).json({errors : "User already exists !!"});
}



 
// PASSWORD
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password,salt);
 




// USER SCHEMA
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