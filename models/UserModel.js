const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    registerDate: {
        type: Date,
        default: Date.now,
    },
});



module.exports = User = mongoose.model("User", UserSchema);