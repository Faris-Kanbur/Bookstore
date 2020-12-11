const express = require("express");

const router = express.Router();

const AuthController = require("../controllers/AuthController");

/** 
 * @route  Post /api/auth/register
 * @desc   Register endpoint
 * @access Public
*/

router.post("/register", AuthController.auth_register);

/** 
 * @route  Post /api/auth/login
 * @desc   login endpoint
 * @access Provate
*/

router.post("/login", AuthController.auth_login);

module.exports = router;