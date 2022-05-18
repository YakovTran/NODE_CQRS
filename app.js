const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {auth, requiresAuth} = require('express-openid-connect');
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
  res.type(".js");
  res.send("window.location.replace('sapappgyver://')")
})
app.get ('/openapp2', (req,res)=>{
  res.location('sapappyger://')
})

/*const UrlScheme = require('url-scheme') ;

app.get('/openappurl', (req, res) => {
  
  new UrlScheme({ url: 'sapappgyver://' })
  .then(res => console.log(res))
  .catch(err => console.error(err))
  
  res.end();
})


const Android = require('uri-scheme');

app.get('/openappuri', (req, res) => {

    Android.openAsync({ uri: 'sapappgyver://' });

    res.end();
})
*/



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

app.get('/', async (req, res) => {

  res.render('shop', {path:'shop'});
 
  if (req.oidc.isAuthenticated() == true ) 
  {     
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

app.use((req,res,next)=>res.status(404).send('Page not found/Error'));
/*const mongoConnect = require('./database');
mongoConnect();*/

