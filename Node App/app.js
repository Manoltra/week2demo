const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Default Page!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact Page.');
});

app.post('/submit', (req, res) => {
    res.send('Post request received!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});