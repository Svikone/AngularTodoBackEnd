const express = require("express");
const Controller = require("../controller/user");
const Router = express.Router()

Router.post("/add",  Controller.addUser);
Router.post("/signin",  Controller.signinUsers);
Router.post("/get",  Controller.getUser);

module.exports = Router;