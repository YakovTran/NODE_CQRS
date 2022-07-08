var products = require('../Database/queryDB')
var EventSourceDB = []
exports.EventSourceDB = EventSourceDB


exports.addProductEvent = (name, price, quantity) => {
    return {
    eventName: "Add New Product",
    date : new Date(),
    nameInput : name,
    priceInput : price,
    quantityInput : quantity
    }
}

exports.updateProductEvent = (name, price, quantity) => {
    return {
    eventName: "Update Product",
    date: new Date(),
    nameInput: name,
    priceInput: price,
    quantityInput: quantity
    }
}

exports.readAllEvent = (productDB) => {
    return{
    allData: productDB
    }  
}

exports.readOneEvent = (idInput) => {
    return{
    data: products[idInput]
    }
}

