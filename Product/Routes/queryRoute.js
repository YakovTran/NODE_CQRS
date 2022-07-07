
const express = require('express');
const router = express.Router();
const queryHandler = require('../Handler/queryHandler')

router.get('/products', queryHandler.getAll)

module.exports = router;