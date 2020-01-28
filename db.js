const mongoose = require("mongoose");
const uri = "mongodb+srv://vlad:admin@cluster0-vzqoj.mongodb.net/todo" ;

mongoose.connect(uri, { 
	useNewUrlParser: true
	}).then(() => {
	console.log("Database is worked");
}).catch( (e) =>{
	console.log("Database disconnect");
    process.exit(1);
}) 
module.exports = mongoose.connection;


