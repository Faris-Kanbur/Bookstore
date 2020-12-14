const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");
var jwt = require('jsonwebtoken');

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
  const newPassword = await bcrypt.hash(password, salt)
  console.log("newPassword :", newPassword)
 




// USER SCHEMA
  const user = new User({
    firstName,
    lastName,
    email,
    password : newPassword //crypted password
  });

  await user.save();


  res.send("Register Completed.");
};




exports.authLogin = async(req, res) => {
  const { email, password } = req.body;

 
  //validator
  const validationErr = validationResult(req);
  
  if (validationErr.errors.length > 0) {
      return res.status(400).json({ errors: validationErr.array() });
  }



  // allready exist user
const userData = await User.findOne({email});
if (!userData) {
  return res.status(400).json({errors : [{ message: "Invalid Email"}] });
}


//Password check
const isPasswordMatch = await bcrypt.compare(password, userData.password);
if (!isPasswordMatch) {
  return res
  .status(400)
  .json({ errors : [{ message: "Invalid Password"}] });
}


jwt.sign({userData}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"}, (err, token) => {
  if(err) {
    return res.status(400).json({ errors: [{ message: "Unkonown Error"}]});
  }
  res.send(token);
});

};