const Modules = require("../model/card")
const jwt = require('jsonwebtoken');

exports.addCard = (req, res) => {
    const card = {
        note: req.body.note,
        title: req.body.title,
        name: req.body.name,
        date: req.body.date,
        user_id: req.user.user_id,
    }
    Modules(card).save().then(result => {
        res.sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.allCards = (req, res) => {
    Modules.find({ user_id: req.user.user_id}).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.removeCards = (req, res) => {
    Modules.deleteOne({_id: req.params.id}).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.getCardId = (req, res) => {
    Modules.findOne({_id: req.params.id}).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.editCards = (req, res) => {
    const card = {
        note: req.body.note,
        title: req.body.title,
        name: req.body.name,
        date: req.body.date,
        user_id: req.user.user_id,
    }
    Modules.findOne({_id: req.params.id}).updateOne(card).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.addCardShared = (req, res) => {
    Modules.find({_id: req.body._id}).then(result => {
        

        result[0]._idShared.push(req.body._idShared)
        Modules.updateOne(result).then(result => {
            console.log(result)
            res.send(result).sendStatus(200);
        }).catch(err => {
            res.sendStatus(500)
        })
    })
}