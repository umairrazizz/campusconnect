const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 4000; // Change to 4000 or any other number
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
