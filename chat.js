//make connection
var socket = io.connect('http://localhost:8080');

var message = document.getElementById('message');
    sendBtn = document.getElementById('send');
    output = document.getElementById('output');

// Emit events
btn.addEventListener('click', fucntion() {
    socket.emit('chat', {
        message: messsage.value
    })

});