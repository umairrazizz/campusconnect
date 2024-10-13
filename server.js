const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

// Initialize express app
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server);

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle a new client connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for chat message events
    socket.on('chatMessage', (msg) => {
        // Broadcast the message to all connected clients
        io.emit('chatMessage', msg);
    });

    // Handle user disconnecting
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
