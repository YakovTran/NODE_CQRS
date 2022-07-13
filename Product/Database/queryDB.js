class demoQueryDB {
    productDB = new Map()
    nameDB = new Map()
    priceDB = new Map()
    quantityDB = new Map ()
    insertProduct(product){
        this.productDB.set(product.id, product)
        this.nameDB.set(product.id, product.name)
        this.priceDB.set(product.id, product.price)
        this.quantityDB.set(product.id, product.quantity)
    }
}

var db = new demoQueryDB

module.exports = db