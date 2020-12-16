const Book = require("../models/BookModel");

exports.getBookList = async ( req, res) => {
    try {
        const booklist = await Book.find();
        res.status(200).json({booklist})
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

exports.getBookDetails = async ( req, res) => {
    try {
        const BookDetails = await Book.findOne({
            _id: req.params.id,
        });

        if(!BookDetails) {
            return res
            .status(400)
            .json({ msg: "There are no details for this book"});
        }
        res.status(200).json({BookDetails});
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
}