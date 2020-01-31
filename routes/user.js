const express = require("express");
const Controller = require("../controller/card");
const Router = express.Router()

Router.post("/add",  Controller.addUser);
Router.post("/signin",  Controller.signinUsers);
// Router.delete("/remove/:id",  Controller.removeCards);

module.exports = Router;