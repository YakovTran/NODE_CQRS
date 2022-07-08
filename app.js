const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const commandRoute = require('./Product/Routes/commandRoute');
const queryRoute = require('./Product/Routes/queryRoute');

app.use(commandRoute)
app.use(queryRoute)

app.listen(3000)

