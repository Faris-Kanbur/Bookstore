const express = require("express");
const router = express.Router();

const BookController = require("../controllers/BookController");


/**
 * @route GET/ api /books
 * @desc Book Listing endpoint
 * @access Public
 */

 router.get("/", BookController.getBookList);

/**
 * @route GET/ api /books / details/:id
 * @desc Book Details endpoint
 * @access Public
 */

 router.get("/details/:id", BookController.getBookDetails)

 module.exports = router;