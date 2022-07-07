var productDB = require('../Database/commandDB')

exports.addProduct = ( req,res)=>{
    const list = productDB.filter(product=> product.name == req.body.name)
    if (list == null) {
        productDB.push(req.body)
    } else {
        res.send("Product is already exist")
    }
}

exports.updateProduct = (req, res) => {
    var findProduct = productDB.filter(product => product.id == req.params.id)
    findProduct[0].name = req.body.name
    findProduct[0].price = req.body.price
    findProduct[0].quantity = req.body.quantity
    res.json(findProduct[0])
}