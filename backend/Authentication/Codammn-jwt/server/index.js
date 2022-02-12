const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User=require("./models/user.model"); 
const jwt=require('jsonwebtoken')
mongoose.connect("mongodb://localhost:27017/Authentication");

// middlewares
// cors is a middleware middlewareis just a function which manipulated the response and in most cases pass it tothe next function
app.use(cors()); //sets correct headers on the response so that chrome allows you to communicate with the cross origin
//cross origin-different ports

//in order to let express knows that we are using josn o pass boudy
app.use(express.json()); //parse everything that comes as body intojson

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
app.post("/api/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    
    if(user){
        const token=jwt.sign({
           name=user.name,
           email:user.email,

        },'secret123')
        return res.json({status: "ok",user: token});
    }else{
        return res.json({status:'error',user:false});
    }
});

app.listen(1337, () => {
  console.log("Server Started on 1337");
});
// to decode jsonwebtoken use atob("..");
//new Date()
// Access to fetch at 'http://localhost:1337/api/register' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
