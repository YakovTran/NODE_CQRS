var products = require('../Database/commandDB')

class validatorByIndex {
    mes = 'Product not found'
    notFound = false
    constructor(i) {
        if (products[i] == undefined) {
            this.notFound = true
        }
    }
}

exports.addProduct = ( req,res)=>{
    const temp = products.filter(product=> product.name == req.body.name)
    if (temp[0] == undefined) {
        products.push(req.body)
        res.json({mes: "Product added", data : products})
    } else {
       res.send("Product is already exist")
    }
}

exports.updateProduct = (req, res) => {
    let i = parseInt(req.params.id)
    let validator = new validatorByIndex(i)
    if(validator.notFound) {
        res.send(validator.mes)
    } else {
    products[i].name = req.body.name
    products[i].price = req.body.price
    res.json({mes: "Product updated", data : products[i]})
    }
}

exports.deleteProduct = (req,res) => {
    let i = parseInt(req.params.id)
    let validator = new validatorByIndex(i)
    if(validator.notFound){
        res.send(validator.mes)
    } else {
        products.splice(i,1)
        res.json({mes: "Product deleted", data: products})
    }
}