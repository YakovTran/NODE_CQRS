
const express = require('express');

const productsController = require('../controllers/handler');

const router = express.Router();

// /admin/add-product => GET
router.get('/add', productsController.input);

// /admin/add-product => POST
router.post('/add', productsController.addBook );

router.delete('/:id', productsController.delete);

router.patch('/:id', productsController.update);

module.exports = router;
