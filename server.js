const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let users = []; // This will store the registered users

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/register', (req, res) => {
    const { name, gender, insta, snapchat } = req.body;
    const user = { name, gender, insta, snapchat, available: true };
    users.push(user);
    res.json({ message: 'User registered successfully!', user });
});

app.get('/matches/:gender', (req, res) => {
    const { gender } = req.params;
    const oppositeGender = gender === 'male' ? 'female' : 'male';
    const availableMatches = users.filter(user => user.gender === oppositeGender && user.available);
    
    if (availableMatches.length > 0) {
        res.json({ match: availableMatches[Math.floor(Math.random() * availableMatches.length)] });
    } else {
        res.json({ match: null });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
