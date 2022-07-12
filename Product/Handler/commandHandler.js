var products = require('../Database/commandDB')
const queryDB = require('../Database/queryDB')

var Projector = new queryDB

exports.addProduct = (req,res)=>{
        products.push(req.body)
        products[products.length - 1].id = products.length - 1
        Projector.addProduct(products[products.length-1])
        res.json({mes: "Product added", data : products})
}

exports.updateProduct = (req, res) => {
    const i = parseInt(req.params.id)
    products[i].name = req.body.name
    products[i].price = req.body.price
    products[i].quantity = req.body.quantity
    res.json({mes: "Product updated", data : products[i]})
}

exports.deleteProduct = (req,res) => {
        products.splice(i,1)
        res.json({mes: "Product deleted", data: products})
}

exports.ProjectorDB = Projector