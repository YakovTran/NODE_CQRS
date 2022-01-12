const path = require('path');

const express = require('express');

const router = express.Router();

const data = require('./admin');

router.get('/', (req, res, next) => {
  const products = data.products;
  res.render('shop', {prods : products, path:'shop'});
});

module.exports = router;