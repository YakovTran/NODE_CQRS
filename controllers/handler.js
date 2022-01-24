const express = require('express');
const { post } = require('../routes/admin');
const bookModel = require('../models/book');

exports.input = (req, res, next) => 
res.render('add', {path:'add'});

exports.addBook = async (req, res ) => {
    const book = new bookModel({
        title : req.body.title,
        price : 10,
        description : "Great Book"
    });
  
    try { 
        const addedBook = await book.save();
        res.json(addedBook);
        //res.redirect('/');
    }
    catch (err) { res.json({message : err});}
};

exports.getAll = async (req, res, next) => {
    
    try {
        const allBooks = await bookModel.find();
        res.json(allBooks);
    } catch (err) {
        res.json({message : err});
    }
}

//exports.getting = (req, res, next ) => {
    //res.render('shop', {path:'shop'});
//}

exports.getOne = async (req, res, next) => {
    try {
        const aBook = await bookModel.findById(req.params.id);
        res.json(aBook);
    } catch (err) {
        res.json({message : err});
    }
}

exports.delete = async (req, res, next ) => {
    try {
        const deletedBook = await bookModel.deleteOne({_id : req.params.id});
        res.json(deletedBook);
    }
    catch (err) {
        res.json({message : err});
    }
}

exports.update = async ( req, res, next ) => {
    try {
        const updatedBook = await bookModel.updateOne(
            {_id : req.params.id},
            {$set: {title : req.body.title}}
            );
        res.json(updatedBook);
    }
    catch (err){
        res.json({message : err});
    }
}

