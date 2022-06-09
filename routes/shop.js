const path = require('path');

const express = require('express');

const productsController = require('../controllers/handler');

const router = express.Router();

router.get('/all', productsController.getAll );
//router.get('/', productsContronller.getting);

router.get('/book/:id', productsController.getOne);

module.exports = router;