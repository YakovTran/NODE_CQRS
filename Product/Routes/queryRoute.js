
const express = require('express');
const router = express.Router();
const queryHandler = require('../Handler/queryHandler')

router.get('/products', queryHandler.getAll)
//router.get('/product:id', queryHandler.getOne)

module.exports = router;