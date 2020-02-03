const express = require("express");
const Controller = require("../controller/card");
const mw = require("../midleware/auth")
const Router = express.Router()


Router.post("/add", mw,  Controller.addCard);
Router.post("/all", mw, Controller.allCards);
Router.delete("/remove/:id", mw,  Controller.removeCards);
Router.post("/:id", mw,  Controller.getCardId);
Router.post("/edit/:id", mw,  Controller.editCards);


module.exports = Router;