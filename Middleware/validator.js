exports.ValidatorByIndex = class validatorByIndex {
    mes = 'Product not found'
    notFound = false
    constructor(i) {
        if (products[i] == undefined) {
            this.notFound = true
        }
    }
}