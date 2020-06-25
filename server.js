const express = require('express');
const bodyParser = require('body-parser');
const passport = require("passport");
const passportSetup = require('./config/passport-setup');
const key = require('./config/key');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');


const authRoutes = require('./routes/auth-routes');
const jobseekerRoutes = require('./routes/jobseeker.route');
const companyRoutes = require('./routes/company.route');
const apiCompanyRoutes = require('./routes/api.route');
const newsRoutes = require('./routes/news.route');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.use(express.static('public'));


app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[key.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(key.mongoURI,{ useNewUrlParser: true ,useUnifiedTopology: true} ,()=> console.log('connected') );

app.use('/auth',authRoutes);
app.use('/jobseeker',jobseekerRoutes);
app.use('/company',companyRoutes);
app.use('/api',apiCompanyRoutes);
app.use('/news',newsRoutes);        


app.get('/',(req,res)=> res.render('homepage'));
app.get('/news',(req,res)=>res.render('news'))



app.listen(5000,function(){
    console.log("Server started on port 5000"); 
})