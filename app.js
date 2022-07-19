const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const commandRoute = require('./User/Routes/commandRoute');
const queryRoute = require('./User/Routes/queryRoute');
const eventRoute = require ('./User/Event/eventRoute')

app.use(commandRoute)
app.use(queryRoute)
app.use(eventRoute)

module.exports = app
