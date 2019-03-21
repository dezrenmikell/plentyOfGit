const express = require('express')
const User = require('../models/User.js')
const Stuff = require('../models/Stuff')
const router = express.Router()

router.get('/', (req, res) => {
    User
    .find()
    .then(users => {
        res.json(users)
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const newUser = new User(req.body.user)

    newUser
        .save()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => console.log(err))
})

// /api/users/:userId
router.get('/:userId', (req, res) => {
    User
    .findById(req.params.userId)
    .then(user => {
        user.myStuff= user.myStuff.reverse()
        res.json(user)
    })
    .catch((err) => console.log(err))
})

router.post('/:userId/stuff', (req, res) => {
    User.findById(req.params.userId).then(user => {
        const newStuff = new Stuff({})
        user.myStuff.push(newStuff)

        user.save().then((user) => {
            res.json(newStuff)
        })
    })
})

router.delete('/:userId/stuff/:stuffId', (req, res) => {
    User.findById(req.params.userId).then(user => {
        const filteredStuff = user.myStuff.filter(stuff => stuff._id.toString() !== req.params.stuffId)

        user.myStuff = filteredStuff

        user.save().then(user => {
            user.myStuff = user.myStuff.reverse()
            res.json(user.myStuff)
        })
    })
})

router.patch('/:userId/stuff/:stuffId', (req, res) => {
    User.findById(req.params.userId).then(user => {
        const update = req.body.stuff
        const stuff = user.myStuff.id(req.params.stuffId)
        if (update.name) {
            stuff.name = update.name
        }
        if (update.description) {
            stuff.description = update.description
        }

        user.save().then((user) => {
            user.myStuff = user.myStuff.reverse()
            res.json(user)
        })
    })
})

module.exports = router