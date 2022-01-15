const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*const {initializeApp} = require ('firebase/app');
const firebaseConfig = {
  apiKey: "AIzaSyAN5P6icKF74aXHkEwVG8MdDLDnXscmoAE",
  authDomain: "matchie-cce12.firebaseapp.com",
  projectId : "matchie-cce12"
}; */

//const firebaseInit = initializeApp(firebaseConfig);

//const {auth} = require('express-openid-connect');
require('dotenv').config();

/*const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};*/

app.set('view engine','ejs');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

/* app.use(auth(config));
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
}); */


/*app.get('/', (req, res, next) => {
  firebaseInit.auth().getRedirectResult();
});*/

app.use((req,res,next)=>res.status(404).send('Page not found/Error'));
/*const mongoConnect = require('./database');
mongoConnect();*/

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yakovtran:code0101001@cluster0.iwtie.mongodb.net/demo?retryWrites=true'
).then ( result => {
    app.listen(process.env.PORT||3000);})
.catch(err => {
    console.log(err);
});
