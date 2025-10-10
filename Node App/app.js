const express = require('express');
const app = express();

// Middleware example
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Default page
app.get('/', (req, res) => {
    res.send('Welcome to the Default Page!');
});

// About page
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

// Contact page
app.get('/contact', (req, res) => {
    res.send('This is the Contact Page.');
});

// POST request handler
app.post('/submit', (req, res) => {
    res.send('Post request received!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});