var products = require('../Database/commandDB')

module.exports = function validateByIndex (req,res,next) {
    let i = parseInt(req.params.id)
        if (products[i] == undefined) {
            res.send("Product not found")
        } else {next()}
    }