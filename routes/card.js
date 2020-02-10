const express = require("express");
const Controller = require("../controller/card");
const mw = require("../midleware/auth")
const Router = express.Router()


Router.post("/add", mw,  Controller.addCard);
Router.get("/all", mw, Controller.allCards);
Router.delete("/remove/:id", mw,  Controller.removeCards);
Router.get("/:id", mw,  Controller.getCardId);
Router.post("/edit/:id", mw,  Controller.editCards);
Router.post("/shared", mw,  Controller.addCardShared);
Router.get("/shared", mw,  Controller.allCardShared);


module.exports = Router;