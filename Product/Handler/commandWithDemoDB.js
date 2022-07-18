
const commandHandler = require('./commandAbstract')
var products = require('../Database/commandDB')
const io = require('socket.io-client')
const socket = io('http://localhost:3000')
socket.emit('commandHandler')
socket.on('mess', mess => {
        console.log(mess)
    })

module.exports = class commandDemoQueryDB extends commandHandler {
  
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