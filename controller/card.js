const Modules = require("../model/card")

exports.addCard = (req, res) => {
    const card = {
        note: req.body.note,
        title: req.body.title,
        name: req.body.name,
        date: req.body.date
    }
    Modules(card).save().then(result => {
        res.sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.allCards = (req, res) => {
    Modules.find().then(result => {
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