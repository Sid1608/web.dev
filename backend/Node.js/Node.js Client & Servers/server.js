const http = require('http');


//storing instance of servers
//callback function will fire every time the request comes to server
const server=http.createServer((req,res)=>{
    //not logs in browser:runningon server not on browser
    console.log('request made');
});

//port, hostname, function
server.listen(8000,'localhost',()=>{
    console.log('listening for request on port 8000')
})