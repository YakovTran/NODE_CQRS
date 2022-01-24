const mongoose = require('mongoose');
const userSchema = mongoose.Schema ({
    name : String,
    email : String,
    imageUrl : String,
    authID : String
  })
  
  module.exports = mongoose.model('users', userSchema);