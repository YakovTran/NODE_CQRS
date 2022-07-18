const queryHandler = require('../Handler/queryDemoDBInjector')
const express = require('express')
const router = express.Router()
const injector = new queryHandler
const queryDemoDB = injector.getQueryHandler()

router.get('/users', queryDemoDB.getAllUsers)
router.get('/user:id', queryDemoDB.getUser)

module.exports = router;