// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number for the server to listen on
const PORT = 1245;

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.status(200); // Set the response status to 200 OK
  res.send('Hello Holberton School!'); // Send the response message
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`); // Log server start message
});

// Export the app for use in other modules or for testing
module.exports = app;
