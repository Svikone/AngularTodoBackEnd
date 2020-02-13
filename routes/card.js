const express = require("express");
const Controller = require("../controller/card");
const mw = require("../midleware/auth")
const Router = express.Router()


Router.post("/add", mw,  Controller.addCard);
Router.get("/all", mw, Controller.allCards);
Router.delete("/remove/:id", mw,  Controller.removeCards);
Router.get("/:id", mw,  Controller.getCardId);
Router.post("/edit/:id", mw,  Controller.editCards);
Router.post("/add/shared", mw,  Controller.addCardShared);
Router.get("/all/shared", mw,  Controller.allCardShared);
Router.post("/remove/shared", mw,  Controller.removeCardShared);





module.exports = Router;