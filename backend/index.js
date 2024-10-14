const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and serving static files
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection (Replace with your MongoDB URI)
mongoose.connect(process.env.MONGODB_URI || 'your-mongo-db-uri', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes for form submissions

// Dating form submission
app.post('/api/dating', (req, res) => {
    const { interests, idealPartner } = req.body;
    // You can save this data to MongoDB if required
    console.log('Dating Form:', req.body);
    res.send('Dating preferences saved successfully.');
});

// Confession form submission
app.post('/api/confessions', (req, res) => {
    const { confession } = req.body;
    console.log('Confession:', req.body);
    res.send('Confession saved successfully.');
});

// Project partner form submission
app.post('/api/project-partner', (req, res) => {
    const { projectTitle, description } = req.body;
    console.log('Project Partner Form:', req.body);
    res.send('Project partner request saved successfully.');
});

// Share ideas form submission
app.post('/api/ideas', (req, res) => {
    const { idea } = req.body;
    console.log('Idea:', req.body);
    res.send('Idea submitted successfully.');
});

// Feedback form submission
app.post('/api/feedback', (req, res) => {
    const { feedback } = req.body;
    console.log('Feedback:', req.body);
    res.send('Feedback received successfully.');
});

// Chat functionality
app.post('/api/chat', (req, res) => {
    const { user, message, userId } = req.body;
    console.log(`Chat message from ${user}: ${message}`);
    res.send('Message sent successfully.');
});

// Root route to serve homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
