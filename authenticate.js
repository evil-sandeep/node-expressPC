const express = require('express');
const app = express();

// Example user for demonstration purposes
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Authentication middleware
const authenticate = (req, res, next) => {
  const { username, password } = req.query; // For simplicity, using query parameters

  // Check if the user is in the "users" array
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // If authenticated, add user to the request object for later use
    req.user = user;
    next(); // Allow access to the next middleware or route handler
  } else {
    // If not authenticated, redirect to login page
    res.redirect('/login');
  }
};

// Route that requires authentication
app.post('/dashboard', authenticate, (req, res) => {
  res.send(`Welcome to the dashboard, ${req.user.username}!`);
});

// Login page
app.get('/login', (req, res) => {
  res.send('Please login to access the dashboard.');
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
