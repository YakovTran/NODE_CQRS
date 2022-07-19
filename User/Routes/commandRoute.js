const express = require('express');
const router = express.Router();
const commandHandler = require('../Handler/commandHandler')
const validateForUpdate = require('../Middleware/validateForUpdate')
const validateForCreate = require('../Middleware/validateForCreate')

router.post('/user', validateForCreate, commandHandler.createUser)
router.patch('/user:id', validateForUpdate, commandHandler.updateUser)
router.delete('/user:id', validateForUpdate, commandHandler.deleteUser)

module.exports = router;