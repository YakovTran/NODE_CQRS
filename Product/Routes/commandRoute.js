
const express = require('express');
const router = express.Router();
const commandHandler = require('../Handler/commandDemoQueryDBInjector')
const validatorByID = require('../Middleware/validatorByID')
const validatorByName = require('../Middleware/validatorByName')
const eventSourcing = require('../../EventSourcing/eventMiddleware')

router.post('/product',eventSourcing.addProductEvent, validatorByName, commandHandler.addProduct)
router.patch('/product:id', eventSourcing.updateProductEvent, validatorByID, commandHandler.updateProduct)
router.delete('/product:id', eventSourcing.deleteProductEvent, validatorByID, commandHandler.deleteProduct)

router.get('/test', (req, res)=>{
    res.sendStatus(200)
})

module.exports = router;
