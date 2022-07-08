var products = require('../Database/commandDB')

exports.byIndex = function validatorByIndex (req,res,next) {
    let i = parseInt(req.params.id)
        if (products[i] == undefined) {
            res.send("Product not found")
        } else {next()}
    }

exports.byName = function validatorByName (req,res,next) {
    const temp = products.filter(product=> product.name == req.body.name)
    if(temp[0]==undefined){
        next()
    } else {
        res.send("Product is already exist")
    }
    }
