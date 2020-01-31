const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
// const multer = require('multer');
// app.use('/file', express.static('file'));
// app.use(multer({dest:__dirname+'/file/uploads/'}).any());

app.use(cors());
// app.use(cors({origin: ["http://localhost:4200","http://localhost:8081"]}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json ({
	extended: true,
	limit: "50mb"
}));

const card = require("./routes/card");
const user = require("./routes/user");



let port = process.env.PORT || 9000;





app.use("/api/card", card);
app.use("/api/user", user);




app.listen(port, function(){
    console.log("server started 9000");
})