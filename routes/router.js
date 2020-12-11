const express = require("express");

const router = express.Router();
const AuthRouter = require("./AuthRouter");
const ProfileRouter = require("./ProfileRouter");
const BookRouter = require("./BookRouter");

/** 
 * @route /api/auth
 * @desc Route for Auth
*/

// Only /api endpoint
router.use("/auth", AuthRouter);



/** 
 * @route /api/profile
 * @desc Route for profile
*/
// router.use("/profile", ProfileRouter);



/** 
 * @route /api/book
 * @desc Route for book
*/
// router.use("/book", BookRouter);


module.exports = router;