// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/campusconnect';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// backend/server.js

// Existing code...

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the CampusConnect API!'); // or any other message
});

// Existing code...
// backend/server.js
const path = require('path'); // Add this import

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Existing code...
