
const express = require('express');
const router = express.Router();
const commandHandler = require('../Handler/commandHandler')

router.post('/product', commandHandler.addProduct)
router.patch('/product:id', commandHandler.updateProduct)
router.delete('/product:id', commandHandler.deleteProduct)

module.exports = router;
