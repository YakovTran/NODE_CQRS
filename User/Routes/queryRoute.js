const queryHandlerInjector = require('../Handler/queryDemoDBInjector')
const express = require('express')
const router = express.Router()
const injector = new queryHandlerInjector
const queryDemoDB = injector.getQueryHandler()

const io = require('socket.io-client')
const socket = io('http://localhost:3000')
socket.emit('query')

socket.on('saveUser', data => {
    queryDemoDB.saveUser(data)
})

router.get('/users', queryDemoDB.getAllUsers)
router.get('/user:id', queryDemoDB.getUser)

module.exports = router;