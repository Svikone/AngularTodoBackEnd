const express = require("express");
const Controller = require("../controller/card");

const Router = express.Router()

// Router.post("/add",  Controller.addCategory);
Router.post("/add",  Controller.addCard);


module.exports = Router;