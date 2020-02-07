const mongoose = require("mongoose");
const cardSchema = mongoose.Schema({
    name: String,
    date: String,
    title: String,
    note: String,
    user_id: String,
    _idShared: []
});

module.exports = mongoose.model("cards",cardSchema);