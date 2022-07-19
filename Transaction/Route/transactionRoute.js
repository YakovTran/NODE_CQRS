const express = require('express')
const router = express.Router()
const transactionHandler = require('../Handler/commandHandler')

router.post('/transaction', transactionHandler.createTransaction)

module.exports = router