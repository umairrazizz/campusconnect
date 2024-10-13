const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from your backend!');
});

// Example route to handle form submissions
app.post('/submit', (req, res) => {
    const userData = req.body;
    console.log('User Data:', userData); // Log data to console

    // Respond back to the client
    res.send({ message: "Form submitted successfully!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});