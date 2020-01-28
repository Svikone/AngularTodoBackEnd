const express = require("express");
const Controller = require("../controller/card");
const Router = express.Router()

Router.post("/add",  Controller.addCard);
Router.post("/all",  Controller.allCards);
Router.delite("/remove",  Controller.removeCards);

module.exports = Router;