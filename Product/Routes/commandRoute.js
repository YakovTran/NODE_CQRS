
const express = require('express');
const router = express.Router();
const commandHandler = require('../Handler/commandHandler')
const validatorByID = require('../Middleware/validatorByID')
const validatorByName = require('../Middleware/validatorByName')
const eventSourcing = require('../../EventSourcing/eventMiddleware')

router.post('/product',eventSourcing.addProductEvent, validatorByName, commandHandler.addProduct)
router.patch('/product:id', eventSourcing.addProductEvent, validatorByID, commandHandler.updateProduct)
router.delete('/product:id', eventSourcing.addProductEvent, validatorByID, commandHandler.deleteProduct)

module.exports = router;
