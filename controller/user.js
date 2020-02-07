const Modules = require("../model/user")
const jwt = require('jsonwebtoken');

exports.addUser = (req, res) => {
    const user = {
        name: req.body.user.name,
        email: req.body.user.email,
        password: req.body.user.password,
    }
    Modules.findOne({name: user.name}).then(result => {
        if (result)
            return res.sendStatus(409);
        Modules(user).save().then(result => {
            res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500)
        })
    })
}

exports.signinUsers = (req, res) => {
    const user = {
        email: req.body.user.email,
        password: req.body.user.password
    }
    Modules.findOne({email: user.email, password: user.password}).then(result => {
        if (result)
            jwt.sign({user_id: result.email}, 'secretkey', (err, token) => {
                res.json({token});
        // res.send(result).sendStatus(200);
            }).catch(err => {
                res.sendStatus(500);
        })
    })
}

exports.getUserId = (req, res) => {
    Modules.findOne({email: req.user.user_id}).then(result => {
        res.send(result).Status(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.getUser = (req, res) => {
    Modules.find({}).then(result => {
        res.send(result).Status(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}