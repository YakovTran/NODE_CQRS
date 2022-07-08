const express = require('express');
const router = express.Router();
const eventHandler = require('./eventHandler')
const commandHandler = require('../Product/Handler/commandHandler')
const Validator = require('../Product/Middleware/validator')

router.get('/events', eventHandler.getEvents)
router.get('/event:id', eventHandler.playEvent)

router.post('/eventReplay',Validator.byName,commandHandler.addProduct)
router.patch('/eventReplay:id',Validator.byIndex,commandHandler.updateProduct)
router.delete('/eventReplay:id',Validator.byIndex,commandHandler.deleteProduct)

module.exports = router