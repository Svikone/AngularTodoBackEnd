const mongoose = require("mongoose");
const catalogSchema = mongoose.Schema({
    name: String,
    date: String,
    title: String,
    note: String,
});

module.exports = mongoose.model("cards",catalogSchema);