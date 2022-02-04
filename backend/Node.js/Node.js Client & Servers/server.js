const http = require('http');
const fs = require('fs');
const { isBuffer } = require('util');
//storing instance of servers
//callback function will fire every time the request comes to server
const server=http.createServer((req,res)=>{
    //not logs in browser:runningon server not on browser
    console.log(req.url,req.method);
    //set header content type 
    res.setHeader('Content-Type','text/html');
    /* 
        //write content to the res object
        res.write('<head><link rel="stylesheet" href="#"></head>');
        res.write('<p>hello ninjas<p>');
        res.write('<p>hello again Ninjas<p>');
        //ending response: it sends response to the browser
        res.end();
    */
   //send an html file 
   fs.readFile('./views/index.html',(err,data)=>{
       if(err){
           console.log(err);
           res.end();
       }else{
           //res.write(data);
           //    or
           res.end(data);
       }
   })
});
//port, hostname, function
server.listen(8000,'localhost',()=>{
    console.log('listening for request on port 8000')
})