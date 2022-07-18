const db = require('../Database/commandEventDB')
const io = require('socket.io-client')
const socket = io('http://localhost:3000')
socket.emit('commandHandler')

module.exports = class commandHandler {
  
    static createUser = (req,res)=>{
        const event = {
                method: req.method,
                time: new Date(),
                data : {
                    userID: req.id,
                    name: req.name,
                    city: req.city,
                    balance: req.balance,
                }
        }    
        db.push(event)
        db[db.length - 1].id = db.length - 1
        socket.emit('createUser', db[db.length-1].data)
        res.json({mes: "User created", data : req.body})
    }

    static updateUser = (req, res) => {
        const event = {
            method: req.method,
            time: new Date(),
            data : {
                userID: req.params.id,
                name: req.name,
                city: req.city,
                balance: req.balance,
            }
        }
        db.push(event)
        db[db.length - 1].id = db.length - 1
        socket.emit('updateUser', db[db.length-1].data)
        res.json({mes: "User updated", data : req.body})
    }

    static deleteUser = (req,res) => {
        const event = {
                method: req.method,
                userID: req.params.id,
                time: new Date()
        }
        db.push(event)
        db[db.length - 1].id = db.length - 1
        socket.emit('deleteUser', req.params.id)
            res.json({mes: "User deleted"})
    }
}