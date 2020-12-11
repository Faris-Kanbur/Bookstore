const express = require("express");

const router = express.Router();
const AuthRouter = require("./AuthRouter");

/** 
 * @route /api/auth
 * @desc Route for Auth
*/

// Only /api endpoint
router.use("/auth", AuthRouter);


module.exports = router;