class queryDB {
    productDB = new Map()
    nameDB = new Map()
    priceDB = new Map()
    quantityDB = new Map ()
    addProduct(product){
        this.productDB.set(product.id, product)
        this.nameDB.set(product.id, product.name)
        this.priceDB.set(product.id, product.price)
        this.quantityDB.set(product.id, product.quantity)
    }
}

module.exports = queryDB