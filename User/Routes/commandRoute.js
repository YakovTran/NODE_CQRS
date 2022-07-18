const express = require('express');
const router = express.Router();
const commandHandler = require('../Handler/commandHandler')
const validatorByID = require('../Middleware/validatorByID')

router.post('/user', validatorByID, commandHandler.createUser)
router.patch('/user:id', validatorByID, commandHandler.updateUser)
router.delete('/user:id', validatorByID, commandHandler.deleteUser)

module.exports = router;