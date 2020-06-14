//step2):
const socket=io("http://localhost:3003");
const messageForm=document.getElementById("send-container");//step3)

const messageInput=document.getElementById("message-input")//step4

const messageContainer=document.getElementById("message-container")//step5


//step6)
const name=prompt("Enter User Name:")
appendMessage("You joined!")
socket.emit('new-user',name)

//serverjs-step7
socket.on('user-connected',name=>{
    appendMessage(`${name} connected`);
})
//Final step
socket.on('user-disconnected',name=>{
    appendMessage(`${name} disconnected`);
})

socket.on('chat-message',data=>{
    //console.log(data)
    //appendMessage(data);//step5
    appendMessage(`${data.name}:${data.message}`)
})

//step3)
messageForm.addEventListener('submit',e=>{
    e.preventDefault();
    //step 4
   const message= messageInput.value;
   socket.emit('send-chat-message',message)//server.js
   //step-7
   appendMessage(`You: ${message}`)
   messageInput.value= '';

})

//step5)

function appendMessage(message)
{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageContainer.append(messageElement)
}