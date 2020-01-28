const mongoose = require("mongoose");
const cardSchema = mongoose.Schema({
    name: String,
    date: String,
    title: String,
    note: String,
});

module.exports = mongoose.model("cards",cardSchema);