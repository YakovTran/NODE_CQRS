const express = require('express');
const router = express.Router();
const eventHandler = require('./eventHandler')
const commandHandler = require('../Product/Handler/commandDemoQueryDBInjector')
const validatorByID = require('../Product/Middleware/validatorByID')
const validatorByName = require('../Product/Middleware/validatorByName')


router.get('/events', eventHandler.getEvents)
router.post('/replayEvent:id', eventHandler.playEvent)

router.post('/eventReplay',validatorByName,commandHandler.addProduct)
router.patch('/eventReplay:id',validatorByID,commandHandler.updateProduct)
router.delete('/eventReplay:id',validatorByID,commandHandler.deleteProduct)

module.exports = router