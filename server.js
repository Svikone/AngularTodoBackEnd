const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
// const multer = require('multer');
// app.use('/file', express.static('file'));
// app.use(multer({dest:__dirname+'/file/uploads/'}).any());

app.use(cors());
// app.use(cors({origin: ["http://localhost:8080","http://localhost:8081"]}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json ({
	extended: true,
	limit: "50mb"
}));

// const adminRouter = require("./routes/marca");


let port = process.env.PORT || 9000;


// app.post('/test',(req,res) => {
// 	console.log('work')
// 	res.send({message: 'work pls'});
// })
// app.get("/",(req,res) => {
// 	res.end("<h1>hello world</h1>")
// })


// app.use("/api/admin", adminRouter);



app.listen(port, function(){
    console.log("server started 9000");
})