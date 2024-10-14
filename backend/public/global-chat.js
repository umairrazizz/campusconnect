const socket = io();

const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const message = messageInput.value;
    
    socket.emit('chatMessage', message);
    
    messageInput.value = '';
});

socket.on('message', (message) => {
    const div = document.createElement('div');
    div.textContent = message;
    messages.appendChild(div);
    
    messages.scrollTop = messages.scrollHeight;
});
