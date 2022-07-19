const express = require('express')
const router = express.Router()
const transactionHandler = require('../Handler/commandHandler')
const rabbitMQ = require('../Handler/rabbitMQ')

router.post('/transaction', rabbitMQ, transactionHandler.createTransaction)

module.exports = router