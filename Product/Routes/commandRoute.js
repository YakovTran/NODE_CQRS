
const express = require('express');
const router = express.Router();
const commandHandler = require('../Handler/commandHandler')

router.post('/addProduct', commandHandler.addProduct)

module.exports = router;
