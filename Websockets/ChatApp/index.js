var express = require('express');
var socket=require('socket.io');

//App setup
var app =express();
var server=app.listen(4000,function(){
    console.log("listening to requests on port 4000")
})


//Static files
app.use(express.static('public'));

//SOCKET setup
// var io=socket(what server we want to work with)
//we want socket.io to work in port 4000
var io=socket(server);
//socket.io is sitting around now on the server waiting for some kind of client a browser to make a connection  and setup a websocket between them

/*
we can listen out for when that connection is made available
when we make a connection from a browser we can pass in a callback function whichfires
*/
io.on('connection', function(socket){
    console.log("made socket connection",socket.id);
    /**listen for chat message*/
    socket.on('chat',function(data){
        /**refers to all sockets connected to the server all browsers/clients will have their indivdual sockets */
        io.sockets.emit('chat',data);
    })
})



/*
inside this callback function we can pass a variable which is going to refer to that instance of the socket which is made, 
that one particular socket so say if  we've got 10 different clients all making a connection 
each one is going to have their own socket between that client and the server.
so when one particular client connects we're going to listen up for this connection method 
it's going to connect to the server we're going to fire callback function which then passes
through this socket which refers to the 
socket between the client that's making the connection and the server makes sense and we can do stuff with this socket object later on
*/