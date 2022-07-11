var eventDB = require('./eventDB')

exports.eventValidator = (req,res,next) => {
    let i = req.params.id
    if(0 <= i <= eventDB.length - 1){
        next()
    } else {
        res.send("Event doesn't exist")
    }
}

exports.addProductEvent = (req,res,next) => {
    const event = {
            method: req.method,
            time: new Date(),
            data : req.body
        }
    eventDB.push(event)
    next()
}

exports.updateProductEvent = (req, res, next) => {
    const event = {
        method: req.method,
        time: new Date(),
        params : req.params.id,
        data : req.body
    }
    eventDB.push(event)
    next()
}

exports.deleteProductEvent = (req, res, next) => {
    const event ={
        method: req.method,
        time: new Date(),
        productID: req.params.id
    }
    eventDB.push(event)
    next()
}
