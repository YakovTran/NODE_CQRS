
const express = require('express');
const router = express.Router();
const commandHandler = require('../Handler/commandHandler')
const Validator = require('../Middleware/validator')
const EventSourcing = require('../Middleware/eventSourcing')

router.post('/product',Validator.byName, EventSourcing.addProductEvent, commandHandler.addProduct)
router.patch('/product:id',Validator.byIndex, EventSourcing.updateProductEvent ,commandHandler.updateProduct)
router.delete('/product:id',Validator.byIndex, EventSourcing.deleteProductEvent, commandHandler.deleteProduct)

module.exports = router;
