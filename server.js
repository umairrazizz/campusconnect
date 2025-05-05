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





<!DOCTYPE html>
<html>
<head>
    <title>Table Layout Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            width: 100%;
            background-color: #ddd;
        }
        .navbar td {
            padding: 10px 20px;
            font-weight: bold;
        }
        .content {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        table {
            border-collapse: collapse;
            width: 200px;
            margin: 10px;
        }
        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: left;
        }
    </style>
</head>
<body>

    <!-- Navigation bar using table -->
    <table class="navbar">
        <tr>
            <td>Home</td>
            <td>About Us</td>
            <td>Blog</td>
        </tr>
    </table>

    <!-- Two tables side by side -->
    <div class="content">
        <!-- Left table -->
        <table>
            <tr>
                <th>Name</th>
                <th>Roll No</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>

        <!-- Right table -->
        <table>
            <tr>
                <th>Name</th>
            </tr>
            <tr>
                <td></td>
            </tr>
            <tr>
                <th>Ph No</th>
            </tr>
            <tr>
                <td></td>
            </tr>
        </table>
    </div>

</body>
</html>




<!DOCTYPE html>
<html>
<head>
    <title>Board Layout in HTML</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            width: 100%;
            background-color: #ddd;
        }
        .navbar td {
            padding: 10px 20px;
            font-weight: bold;
        }
        .content {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        table {
            border-collapse: collapse;
            margin: 10px;
        }
        th, td {
            border: 1px solid black;
            padding: 20px;
            min-width: 80px;
            text-align: left;
        }
    </style>
</head>
<body>

    <!-- Navigation bar -->
    <table class="navbar">
        <tr>
            <td>Home</td>
            <td>About Us</td>
            <td>Blog</td>
        </tr>
    </table>

    <!-- Main content area -->
    <div class="content">
        <!-- Left table: two vertical rows under Name and Roll No -->
        <table>
            <tr>
                <th>Name</th>
                <th>Roll No</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>

        <!-- Right table: form-like layout -->
        <table>
            <tr>
                <th>Name</th>
            </tr>
            <tr>
                <td></td>
            </tr>
            <tr>
                <th>Ph No</th>
            </tr>
            <tr>
                <td></td>
            </tr>
        </table>
    </div>

</body>
</html>





<!DOCTYPE html>
<html>
<head>
    <title>Two Table Layout</title>
    <style>
        table {
            border-collapse: collapse;
            margin: 20px;
            float: left;
        }
        th, td {
            border: 1px solid black;
            padding: 20px;
            text-align: center;
            min-width: 80px;
        }
    </style>
</head>
<body>

    <!-- Left Table -->
    <table>
        <tr>
            <th>Name</th>
            <th>Roll No</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </table>

    <!-- Right Table -->
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td></td>
        </tr>
        <tr>
            <th>Ph No</th>
        </tr>
        <tr>
            <td></td>
        </tr>
    </table>

</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <title>Student Info Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        /* Navigation Bar */
        .navbar {
            background-color: #333;
            overflow: hidden;
        }

        .navbar a {
            float: left;
            display: block;
            color: white;
            padding: 14px 20px;
            text-decoration: none;
        }

        .navbar a:hover {
            background-color: #575757;
        }

        /* Main Container */
        .container {
            display: flex;
            justify-content: center;
            margin-top: 30px;
            gap: 50px;
        }

        table {
            border-collapse: collapse;
            border: 1px solid black;
        }

        th, td {
            border: 1px solid black;
            padding: 20px;
            min-width: 100px;
            text-align: center;
        }
    </style>
</head>
<body>

    <!-- Navigation Bar -->
    <div class="navbar">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
    </div>

    <!-- Tables Container -->
    <div class="container">
        <!-- Left Table -->
        <table>
            <tr>
                <th>Name</th>
                <th>Roll No</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>

        <!-- Right Table -->
        <table>
            <tr>
                <th>Name</th>
            </tr>
            <tr>
                <td></td>
            </tr>
            <tr>
                <th>Ph No</th>
            </tr>
            <tr>
                <td></td>
            </tr>
        </table>
    </div>

</body>
</html>


