const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const stuffController = require('../controllers/stuffController')

router.get('/home', appController.index)

// User routes
router.get('/', userController.index)

router.get('/new', userController.new)

router.post('/', userController.create)

router.get('/:userId', userController.show)

router.delete('/:userId', userController.delete)

//Planner routes
router.get('/:userId/stuff', stuffController.index)

router.get('/:userId/stuff/new', stuffController.new)

router.post('/:userId/stuff', stuffController.create)

router.get('/:userId/stuff/:stuffId', stuffController.show)

router.get('/:userId/stuff/:stuffId/edit', stuffController.edit)

router.put('/:userId/stuff/:stuffId', stuffController.update)

router.delete('/:userId/stuff/:stuffId', stuffController.delete)

module.exports=router