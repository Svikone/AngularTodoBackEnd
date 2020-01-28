const Modules = require("../model/card")

exports.addCard = (req, res) => {
    const card = {
        note: req.body.note,
        title: req.body.title,
        name: req.body.name,
        data: req.body.data
    }
    Modules(card).save().then(result => {
        res.sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.allCard = (req, res) => {
    Modules.find().then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.allCard = (req, res) => {
    Modules.deleteOne({_id: req.body.id}).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}