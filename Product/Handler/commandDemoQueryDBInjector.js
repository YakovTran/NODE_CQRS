const demoQueryDB = require('../Database/queryDB')
const commandHandler = require('./commandHandler')
var products = require('../Database/commandDB')

class commandDemoQueryDB extends commandHandler {
    ProjectorDB = new demoQueryDB
  
    addProduct = (req,res)=>{
            products.push(req.body)
            products[products.length - 1].id = products.length - 1
            this.ProjectorDB.insertProduct(products[products.length-1])
            res.json({mes: "Product added", data : products})
    }

    updateProduct = (req, res) => {
            const i = parseInt(req.params.id)
            products[i].name = req.body.name
            products[i].price = req.body.price
            products[i].quantity = req.body.quantity
            res.json({mes: "Product updated", data : products[i]})
    }

    deleteProduct = (req,res) => {
            products.splice(i,1)
            res.json({mes: "Product deleted", data: products})
    }
}

const commandDemoQueryDBInjector = new commandDemoQueryDB

module.exports = commandDemoQueryDBInjector