var db = require('../Database/transactionDB')
const io = require('socket.io-client')
const socket = io('http://localhost:3000')
socket.emit('transaction')

module.exports = class transactionHandler {
    static createTransaction = (req,res) => {
        const trans = {
            senderID: req.body.senderID,
            receiverID: req.body.receiverID,
            amount: req.body.amount
        }
        db.push(trans)
        res.json({mes: "Transaction saved", data: trans})
        socket.emit('newTransaction', trans)
    }
}