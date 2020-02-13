const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

userSchema.index({name: 'text', 'profile.something': 'text'});//Для того чтобы в контроллере можно было искать по словам
module.exports = mongoose.model("users",userSchema);