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

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/campusconnect', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the CampusConnect API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





<!DOCTYPE html>
<html>
<head>
    <title>Student Info Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            background-color: #eee;
            padding: 10px;
        }
        .navbar a {
            margin-right: 20px;
            text-decoration: none;
            color: black;
            font-weight: bold;
        }
        .container {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
        }
        form {
            display: flex;
            flex-direction: column;
            width: 200px;
        }
        form input {
            margin-bottom: 10px;
            padding: 5px;
        }
    </style>
</head>
<body>

    <div class="navbar">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Blog</a>
    </div>

    <div class="container">
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                </tr>
                <tr>
                    <td>John</td>
                    <td>101</td>
                </tr>
                <tr>
                    <td>Jane</td>
                    <td>102</td>
                </tr>
            </table>
        </div>

        <div>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
                
                <label for="phone">Phone:</label>
                <input type="text" id="phone" name="phone">

                <input type="submit" value="Submit">
            </form>
        </div>
    </div>

</body>
</html>

