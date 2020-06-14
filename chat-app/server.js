const io=require('socket.io')(3003)

const users={}//step 6)

//step1)
io.on('connection',socket=>{

    //step-6

    socket.on ('new-user',name=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-connected', name)
    });
//console.log('new user')//==>validating users
//socket.emit('chat-message','hey..successfully connected')

socket.on('send-chat-message',message=>{
    //console.log(message)//==>input value capture in console

  //socket.broadcast.emit('chat-message',message);//==>same input value validate in browser console
 
  socket.broadcast.emit('chat-message',{message:message,name:users[socket.id]})
});

//Final Step
socket.on('disconnect',()=>
{
    socket.broadcast.emit('user-disconnected',users[socket.id])
    delete users[socket.id]
});

});






