const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {auth, requiresAuth} = require('express-openid-connect');
const axios = require("axios").default
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};

app.use(auth(config));

app.get ('/openapp', (req,res)=>{
  res.sendFile(path.join(__dirname, 'open.html'));
})


const mongoose = require('mongoose');
const { Http2ServerRequest } = require('http2');
mongoose.connect('mongodb+srv://yakovtran:code0101001@cluster0.iwtie.mongodb.net/demo?retryWrites=true'
).then ( result => {
    app.listen(process.env.PORT||3000);})
.catch(err => {
    console.log(err);
});

const userModel = require('./models/user');

app.get('/auth', (req, res)=>{
    res.send (req.oidc.isAuthenticated() ? 'Logged in' : 'Loggout');
});

var userID = ''

app.get('/', async (req, res) => {
  
  res.render('shop', {path:'shop'});
 
  if (req.oidc.isAuthenticated() == true ) 
  {   
      userID = req.oidc.user.sub
      const user = new userModel ({
            name : req.oidc.user.nickname,
            email : req.oidc.user.email,
            imageUrl : req.oidc.user.picture,
            authID : req.oidc.user.sub
});
    const authCheck = userModel.findOne({authID : req.oidc.user.sub});
      
      if ( authCheck === null) {
        try { await user.save();}
        catch (err) {console.log(err);}
      }
  };

});

var token =''
var getToken = {
    method: 'POST',
    url: 'https://nodemo.us.auth0.com/oauth/token',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: 'ZKuduvtPck6nVar5fa2BVaAs3AqFE2rB',
      client_secret: 'qFva4cM7_9iUC193WrOPeSDljVTorI91NZQDTBaTeEok8_1h8p2KzmU9-jYcipH8',
      audience: 'https://nodemo.us.auth0.com/api/v2/'
    })
};

axios.request(getToken).then((response)=> {
  token = response.data.access_token
}).catch(err => {
  console.log(err);
});

app.get('/user', (req,res)=> {
  userID = req.oidc.user.sub
  var getCurrentUser = {
    method: 'GET',
    url: `https://nodemo.us.auth0.com/api/v2/users/${userID}`,
    headers: {'content-type': 'application/json', authorization: `Bearer ${token}`},
    };

  axios.request(getCurrentUser).then((response) =>{
      res.json(response.data)
    }).catch((err) =>{
      console.log(err);
    });
})

app.get('/users', (req,res)=> {
  var getUsers = {
    method: 'GET',
    url: 'https://nodemo.us.auth0.com/api/v2/users',
    headers: {'content-type': 'application/json', authorization: `Bearer ${token}`},
    };

  axios.request(getUsers).then((response) =>{
      res.json(response.data)
    }).catch((err) =>{
      console.log(err);
    });
})


app.use((req,res,next)=>res.status(404).send('Page not found/Error'));
/*const mongoConnect = require('./database');
mongoConnect();*/

