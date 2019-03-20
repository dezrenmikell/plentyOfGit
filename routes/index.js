const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const stuffController = require('../controllers/stuffController')

router.get('/', appController.index)

// User routes
router.get('/users', userController.index)

router.get('/users/new', userController.new)

router.post('/users', userController.create)

router.get('/users/:userId', userController.show)

router.delete('/users/:userId', userController.delete)

//Planner routes
router.get('/users/:userId/stuff', stuffController.index)

router.get('/users/:userId/stuff/new', stuffController.new)

router.post('/users/:userId/stuff', stuffController.create)

router.get('/users/:userId/stuff/:stuffId', stuffController.show)

router.get('/users/:userId/stuff/:stuffId/edit', stuffController.edit)

router.put('/users/:userId/stuff/:stuffId', stuffController.update)

router.delete('/users/:userId/stuff/:stuffId', stuffController.delete)

module.exports=router