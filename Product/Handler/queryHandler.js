var productDB = require('../Database/queryDB')

exports.getAll = (req,res) => {
    res.send(productDB)
}