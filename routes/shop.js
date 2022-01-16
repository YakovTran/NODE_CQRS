const path = require('path');

const express = require('express');

const productsContronller = require('../controllers/products');

const router = express.Router();

router.get('/all', productsContronller.getAll );
router.get('/', productsContronller.getting);

router.get('/book/:id', productsContronller.getOne);

module.exports = router;