var eventDB = require('./eventDB')
const io = require('socket.io-client')
const socket = io('http://localhost:3000')
socket.emit('event')

socket.on('mess', mess => {
    console.log(mess)
})

exports.eventValidator = (req,res,next) => {
    const i = req.params.id
    if(0 <= i <= eventDB.length - 1){
        next()
    } else {
        res.send("Event doesn't exist")
    }
}

exports.addProductEvent = (req,res,next) => {
    //socket.emit("add-product", req.body)
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
        params: req.params.id
    }
    eventDB.push(event)
    next()
}
