const mongoose = require("mongoose");
const cardSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("users",userSchema);