const path = require('path');

const express = require('express');

const producsContronller = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add', producsContronller.input);

// /admin/add-product => POST
router.post('/add', producsContronller.adding );

router.delete('/:id', producsContronller.delete);

router.patch('/:id', producsContronller.update);

module.exports = router;
