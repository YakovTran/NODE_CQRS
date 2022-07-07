const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views', 'views');
const commandRoute = require('./Product/Routes/commandRoute');
const queryRoute = require('./Product/Routes/queryRoute');

app.use(commandRoute)
app.use(queryRoute)

app.get('/', (req, res) => {
  res.render('add', {path:'add'}) })

app.listen(3000)

app.use((req,res,next)=>res.status(404).send('Page not found/Error'))
