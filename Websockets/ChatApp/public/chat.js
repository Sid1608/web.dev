//Make connection
/*io from frontend libraray */
var socket =io.connect('http://localhost:4000');


// Query DOM 
var message=document.getElementById('message');
    handle=document.getElementById('handle');
    btn=document.getElementById('send');
    output=document.getElementById('output');
    feedback=document.getElementById('feedback');


//emit events
btn.addEventListener('click',function(){
    //we want to emit a message so that we can receive it on 
    //the client we want to send it down the websocket
    
    /** this will emit a message down the websocket to the server */
    //para1: name of the message, para2: actual message
    socket.emit('chat',{
        message:message.value,
        handle:handle.value,
    })
})

message.addEventListener('keypress',function() {
    feedback.innerHTML="";
    socket.emit('typing',handle.value)
})


//Listen For events
socket.on('chat',function(data){
    feedback.innerHTML="";
    output.innerHTML +='<p><strong>' + data.handle + ':</strong>' + data.message +'</p>'

})
socket.on('typing',function(data){
    feedback.innerHTML +='<p><em>' + data + ' is typing a message...</em></p>'
})