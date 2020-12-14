const express = require("express");

const router = express.Router();

//base url : /api/profile

/**
 * @route   GET /api/profile
 * @desc    Profile endpoint
 * @access  Private
 */
router.get("/", (req, res) => {
    res.send("private profile page");
});

module.exports = router;