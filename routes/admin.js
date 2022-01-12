const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add', (req, res, next) => {
  res.render('add', {path:'add'});
});

// /admin/add-product => POST
router.post('/add', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.router = router;
exports.products = products;
