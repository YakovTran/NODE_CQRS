const express = require('express');
const router = express.Router();
const eventHandler = require('./eventHandler')
const injector = require('../Product/Handler/commandWithDemoDBInjector')
const validatorByID = require('../Product/Middleware/validatorByID')
const validatorByName = require('../Product/Middleware/validatorByName')

commandHandler = injector.getCommandHandler()

router.get('/events', eventHandler.getEvents)
router.post('/replayEvent:id', eventHandler.playEvent)

router.post('/eventReplay',validatorByName,commandHandler.addProduct)
router.patch('/eventReplay:id',validatorByID,commandHandler.updateProduct)
router.delete('/eventReplay:id',validatorByID,commandHandler.deleteProduct)

module.exports = router