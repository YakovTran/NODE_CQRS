var products = require('../Database/commandDB')

module.exports = function validateByName (req,res,next) {
    const temp = products.filter(product=> product.name == req.body.name)
    if(temp[0]==undefined){
        next()
    } else {
        res.send("Product is already exist")
    }
}