const express = require('express');
const router = express.Router();
const commandHandler = require('../Handler/commandHandler')
const validateForUpdate = require('../Middleware/validateForUpdate')
const validateForCreate = require('../Middleware/validateForCreate')
const io = require('socket.io-client')
const socket = io('http://localhost:3000')
socket.emit('command')
socket.on('updateUserBalance', msg => {
    commandHandler.updateBalance(msg)
})

//const rabbitMQ = require('../Middleware/rabbitMQ')

router.post('/user', validateForCreate, commandHandler.createUser)
router.patch('/user:id', validateForUpdate, commandHandler.updateUser)
router.delete('/user:id', validateForUpdate, commandHandler.deleteUser)

module.exports = router;