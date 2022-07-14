var productDB = new Map()
var nameDB = new Map()
var priceDB = new Map()
var quantityDB = new Map ()

module.exports = class demoQueryDB {
    insertProduct(product){
        productDB.set(product.id, product)
        nameDB.set(product.id, product.name)
        priceDB.set(product.id, product.price)
        quantityDB.set(product.id, product.quantity)
    }
    getProducts(){
        var products = Array.from(productDB.values())
        return products
    }
}
