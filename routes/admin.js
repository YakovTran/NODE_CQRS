const path = require('path');

const express = require('express');

const productsContronller = require('../controllers/handler');

const router = express.Router();

// /admin/add-product => GET
router.get('/add', productsContronller.input);

// /admin/add-product => POST
router.post('/add', productsContronller.addBook );

router.delete('/:id', productsContronller.delete);

router.patch('/:id', productsContronller.update);

module.exports = router;
