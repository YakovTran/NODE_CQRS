const mongoose = require('mongoose');

const bookSchema = mongoose.Schema ({
    title : String,
    description : String,
    price : Number
})

module.exports = mongoose.model('Books', bookSchema);
