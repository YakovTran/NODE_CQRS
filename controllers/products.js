const bookModel = require('../models/book');
const { post } = require('../routes/admin');

exports.input = (req, res, next) => 
res.render('add', {path:'add'});

exports.adding = (req, res, next) => {
    const book = new bookModel({
        title : req.body.title,
        price : 10,
        description : "Great Book"
    });
  
    book.save()
    .then( result => { 
        console.log('Data added !');})
    .catch(err => {console.log(err);});
    res.redirect('/');
};

exports.getting = (req, res, next) => 
    res.render('shop', {path:'shop'});