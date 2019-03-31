const express = require('express')
const User = require('../models/User.js')
const Idea = require('../models/Idea.js')
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
        user.ideas = user.ideas.reverse()
        res.json(user)
    })
    .catch((err) => console.log(err))
})

router.post('/:userId/ideas', (req, res) => {
    User.findById(req.params.userId).then(user => {
        const newIdea = new Idea({})
        user.ideas.push(newIdea)

        user.save().then((user) => {
            res.json(newIdea)
        })
    })
})

router.delete('/:userId/ideas/:ideaId', (req, res) => {
    User.findById(req.params.userId).then(user => {
        const filteredIdeas = user.ideas.filter(idea => idea._id.toString() !== req.params.ideaId)

        user.ideas = filteredIdeas

        user.save().then(user => {
            user.ideas = user.ideas.reverse()
            res.json(user.ideas)
        })
    })
})

router.patch('/:userId/ideas/:ideaId', (req, res) => {
    User.findById(req.params.userId).then(user => {
        const update = req.body.idea
        const idea = user.ideas.id(req.params.ideaId)
        if (update.title) {
            idea.title = update.title
        }
        if (update.description) {
            idea.description = update.description
        }

        user.save().then((user) => {
            user.ideas = user.ideas.reverse()
            res.json(user)
        })
    })
})

module.exports = router