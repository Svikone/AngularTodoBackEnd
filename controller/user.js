const Modules = require("../model/user")

exports.addUser = (req, res) => {
    const user = {
        name: req.body.user.name,
        email: req.body.user.email,
        password: req.body.nauser.password,
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
        email: req.body.user.firstName,
        password: req.body.user.password
    }
    Modules.findOne({email: user.email, password: user.password}).then(result => {
        if (result)
            jwt.sign({email: user.email}, 'secretkey', (err, token) => {
                res.json({token});
            }).catch(err => {
                res.sendStatus(500);
        })
    })
}