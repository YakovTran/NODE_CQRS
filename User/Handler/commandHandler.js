const db = require('../Database/commandEventDB')
const io = require('socket.io-client')
const socket = io('http://localhost:3000')
socket.emit('command')
const amqp = require('amqplib/callback_api')

module.exports = class commandHandler {
  
    static createUser = (req,res)=>{
        const event = {
                method: req.method,
                time: new Date(),
                data : {
                    userID: req.body.id,
                    name: req.body.name,
                    city: req.body.city,
                    balance: req.body.balance
                }
        }
        db.push(event)
        db[db.length - 1].id = db.length - 1
        socket.emit('saveUser', db[db.length-1].data)
        

        amqp.connect('amqp://localhost', function(error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function(error1, channel) {
                if (error1) {
                throw error1;
                }

                channel.assertExchange('testing','direct', {
                durable: false
                });

                channel.publish('testing', 'main', Buffer.from(JSON.stringify(db[db.length-1].data)))

            });
        })

        res.json({mes: "User created", data : db[db.length-1].data})
    }

    static updateUser = (req, res) => {
        const event = {
            method: req.method,
            time: new Date(),
            data : {
                userID: req.params.id,
                name: req.body.name,
                city: req.body.city,
                balance: req.body.balance
            }
        }
        db.push(event)
        db[db.length - 1].id = db.length - 1
        socket.emit('saveUser', db[db.length-1].data)
        res.json({mes: "User updated", data : db[db.length-1].data})
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

    static updateBalance (msg) {
        const event = {
            method: "Update Balance from Transaction",
            time: new Date(),
            data : msg
        }
        db.push(event)
        db[db.length - 1].id = db.length - 1
    }
}