const express = require("express");
const Controller = require("../controller/user");
const Router = express.Router();
const mw = require("../midleware/auth");


Router.post("/add",  Controller.addUser);
Router.post("/signin",  Controller.signinUsers);
Router.get("/get", mw, Controller.getUser);

module.exports = Router;