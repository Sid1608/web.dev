const express=require('express');
//express app
const app = express() ;
//listen for requests
app.listen(3000);//returns instance of server
app.get('/',(req,res)=>{
    // res.send('<p>Home Page<p>');
    //here path should'nt be relative
    res.sendFile('./views/index.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
    // res.send('<p>About Page<p>');
    res.sendFile('./views/about.html',{root:__dirname})
})

//redirects
app.get('/about-us',(req,res)=>{
    //automatic set status code
    res.redirect('./about');
})

//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
})