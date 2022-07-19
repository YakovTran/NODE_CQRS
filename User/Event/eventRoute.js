const express = require('express')
const router = express.Router()
const eventHandler = require("./eventHandler")

router.get('/events', eventHandler.getEvents)

module.exports = router;