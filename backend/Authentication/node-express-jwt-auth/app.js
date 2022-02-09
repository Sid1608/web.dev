const express = require('express');
const mongoose = require('mongoose');
const authRoutes=require("./routes/authRoutes");
const {requireAuth,checkUser}=require('./middleware/authMiddleware')
const cookieParser = require('cookie-parser');
const app = express();
// middleware
app.use(express.static('public'));
app.use(express.json())//it takes any json data that comes along with a request and it parsed it into a javascript object so that we can use it inside a code and it attaches that object withh data and  to request object inside handler
app.use(cookieParser());//
// view engine
//ejs- template engine for our views
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://net-ninja:net-ninja@cluster0.iy4ei.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

  // routes
  //* apply this to every single route and apply checkuser middleware
app.get('*',checkUser);//aplly middleware to every get request
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies',requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);//equivalies of saying all routes of auth are present here

