const path = require('path');

const express = require('express');

const productsContronller = require('../controllers/products');

const router = express.Router();

router.get('/', productsContronller.getting );

module.exports = router;