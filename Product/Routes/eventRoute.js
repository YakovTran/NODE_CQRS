const express = require('express');
const router = express.Router();
const eventHandler = require('../Handler/eventHandler')

router.get('/events', eventHandler.getEvents)
//router.get('/event:id',)